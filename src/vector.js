import { identity } from './math';
import { isFunction } from './type-checking';

/**
 * Aggregate a vector using one or more aggregators. Like a multi-purpose reducer.
 * @param {number[]} v - Numerivcal vector
 * @param {function | function[]} aggregater - A single or multiple aggregator
 *   functions. The aggregator functions work like reducers.
 * @param {number | number[]} startValue - A single or multiple start values
 * @param {function} options.getter - A value getter
 * @return {number | number[]} A single or multiple aggregagted values
 */
export const aggregate = (
  v,
  aggregater,
  startValue,
  { getter = identity } = {}
) => {
  const isSingle = isFunction(aggregater);

  const aggregaters = isSingle ? [aggregater] : aggregater;
  const startValues = isSingle ? [startValue] : startValue;

  const out = v.reduce(
    (aggregates, x) => aggregaters.map((fn, i) => fn(aggregates[i], getter(x))),
    startValues === undefined ? Array(aggregaters.length).fill(0) : startValues
  );

  return isSingle ? out[0] : out;
};

/**
 * Get the difference of two vectoe
 * @param {number[]} v - Numerical vectors
 * @param {number[]} w - Numerical vectors
 * @return {number[]} Difference vector
 */
export const diff = (v, w) => v.map((x, i) => x - w[i]);

/**
 * L distance between a pair of vectors
 *
 * @param {number} l - Defines the Lp space
 * @param {number} dim - Dimension of the input data (Optional)
 * @returns {function} Returns a function to calculate the `l` distance between
 *   a pair of vectors.
 * @type {(l: number, dim: number) => (v: number[], w: number[]) => number}
 */
export const lDist = (l, dim) => {
  if (Number.isNaN(+dim)) {
    /**
     * L distance function
     * @param {number[]} v - First vector
     * @param {number[]} w - Second vector
     * @return {number} L distance
     */
    return (v, w) =>
      v.length === w.length
        ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]) ** l, 0) ** (1 / l)
        : undefined;
  }

  const body = Array.from(
    { length: dim },
    (_, i) => `s += Math.abs(v[${i}] - w[${i}]) ** l;`
  ).join(' ');

  // eslint-disable-next-line no-new-func
  return new Function(
    'v',
    'w',
    `const l = ${l}; let s = 0; ${body} return s ** (1 / l);`
  );
};

/**
 * L1 distance between a pair of vectors
 *
 * @description This is identical but much faster than `lDist(1)(v, w)`
 * @param {number[]} v - First vector
 * @param {number[]} w - Second vector
 * @return {number} L2 distance
 */
export const l1Dist = (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
    : undefined;

/**
 * Creates a l1 distance function tailored to the dimension of the data
 *
 * @description This is identical but faster than `l1Dist(v, w)`.
 * @param {number} dim - Dimension of the input data
 * @return {function} A function with the same signature as `l1Dist`
 */
export const l1DistByDim = (dim) => {
  const body = Array(dim)
    .fill()
    .map((_, i) => `s += Math.abs(v[${i}] - w[${i}]);`)
    .join(' ');
  // eslint-disable-next-line no-new-func
  return new Function('v', 'w', `let s = 0; ${body} return s;`);
};

/**
 * L2 distance between a pair of vectors
 *
 * @description This is identical but much faster than `lDist(2)(v, w)`.
 * @param {number[]} v - First vector
 * @param {number[]} w - Second vector
 * @return {number} L2 distance
 */
export const l2Dist = (v, w) =>
  v.length === w.length
    ? Math.sqrt(v.reduce((sum, x, i) => sum + (x - w[i]) ** 2, 0))
    : undefined;

/**
 * Creates a l2 distance function tailored to the dimension of the data
 *
 * @description
 * This is identical but faster than `l2Dist(v, w)`
 *
 * @param {number} dim - Dimension of the input data
 * @return {function} A function with the same signature as `l2Dist`
 */
export const l2DistByDim = (dim) => {
  const body = Array(dim)
    .fill()
    .map((_, i) => `s += Math.pow(v[${i}] - w[${i}], 2);`)
    .join(' ');
  // eslint-disable-next-line no-new-func
  return new Function('v', 'w', `let s = 0; ${body} return Math.sqrt(s);`);
};

/**
 * Vector L2 norm
 *
 * @description
 * This is identical but much faster than `Math.hypot(...v)`
 *
 * @param {number[]} v - Numerical vector
 * @return {number} L2 norm
 */
export const l2Norm = (v) => Math.sqrt(v.reduce((sum, x) => sum + x ** 2, 0));

/**
 * Get the maximum number of a vector while ignoring NaNs
 *
 * @description
 * This version is muuuch faster than `Math.max(...v)` and supports vectors
 * longer than 256^2, which is a limitation of `Math.max.apply(null, v)`.
 *
 * @param {number[]} v - Numerical vector
 * @return {number} The largest number
 */
export const max = (v) =>
  v.reduce((_max, a) => (a > _max ? a : _max), -Infinity);

export const maxNan = max;

/**
 * Get the max vector
 * @param {number[][]} m - Array of vectors
 * @return {number[]} Max vector
 */
export const maxVector = (m) => {
  switch (m.length) {
    case 0:
      return [];

    case 1:
      return m[0];

    default:
      return m.reduce(
        (_max, v) => v.map((x, i) => (_max[i] > x ? _max[i] : x)),
        new Array(m[0].length).fill(-Infinity)
      );
  }
};

/**
 * Get the mean of a vector
 *
 * @param {number[]} v - Numerical vector
 * @return {number} The mean
 */
export const mean = (v) => sum(v) / v.length;

/**
 * Get the mean of a vector while ignoring NaNs
 *
 * @description Roughly 30% slower than `mean()`
 * @param {number[]} v - Numerical vector
 * @return {number} The mean
 */
export const meanNan = (v) => {
  let length = 0;
  return (
    v.reduce((s, x) => {
      if (x || x === 0) return ++length && s + x;
      return s;
    }, 0) / length
  );
};

/**
 * Get the mean vector
 * @param {number[][]} m - Array of vectors
 * @return {number[]} Mean vector
 */
export const meanVector = (m) => {
  switch (m.length) {
    case 0:
      return [];

    case 1:
      return m[0];

    default:
      return m.reduce(
        (_mean, v) => v.map((x, i) => _mean[i] + x / m.length),
        new Array(m[0].length).fill(0)
      );
  }
};

/**
 * Get the median of a vector
 *
 * @param {number[]} v - Numerical vector
 * @return {number} The median
 */
export const median = (v) => v[Math.floor(v.length / 2)];

/**
 * Get the median vector
 * @param {number[][]} m - Array of vectors
 * @return {number[]} The median vector
 */
export const medianVector = median;

/**
 * Get the minimum number of a vector while ignoring NaNs
 *
 * @description
 * This version is muuuch faster than `Math.min(...v)` and supports vectors
 * longer than 256^2, which is a limitation of `Math.min.apply(null, v)`.
 *
 * @param {number[]} v - Numerical vector
 * @return {number} The smallest number
 */
export const min = (v) =>
  v.reduce((_min, a) => (a < _min ? a : _min), Infinity);

export const minNan = min;

/**
 * Get the min vector
 * @param {number[][]} m - Array of vectors
 * @return {number[]} Min vector
 */
export const minVector = (m) => {
  switch (m.length) {
    case 0:
      return [];

    case 1:
      return m[0];

    default:
      return m.reduce(
        (_min, v) => v.map((x, i) => (_min[i] < x ? _min[i] : x)),
        new Array(m[0].length).fill(Infinity)
      );
  }
};

/**
 * Non-negative modulo function. E.g., `mod(-1, 5) === 4` while `-1 % 5 === -1`.
 *
 * @param {number} x - Dividend
 * @param {number} y - Divisor
 * @return {number} Remainder
 */
export const mod = (x, y) => ((x % y) + x) % y;

/**
 * Normalize vector
 * @param {array} v - Numerical vector
 * @return {array} Unit vector
 */
export const normalize = (v) => {
  const norm = l2Norm(v);
  return v.map((x) => x / norm);
};

/**
 * Initialize an array of a certain length using a mapping function
 *
 * @description
 * This is equivalent to `Array.from({ length }, mapFn)` but about 60% faster
 *
 * @param {number} length - Size of the array
 * @param {function} mapFn - Mapping function
 * @return {array} Initialized array
 * @type {<T = number>(length: number, mapFn: (i: number, length: number) => T) => T[]}
 */
export const rangeMap = (length, mapFn = (x) => x) => {
  const out = [];
  for (let i = 0; i < length; i++) {
    out.push(mapFn(i, length));
  }
  return out;
};

/**
 * A function to created a range array
 * @param {number} start - Start of the range (included)
 * @param {number} end - End of the range (excluded)
 * @param {number} stepSize - Increase per step
 * @return {array} Range array
 */
export const range = (start, end, stepSize = 1) => {
  const realStepSize = stepSize * Math.sign(end - start);
  if (Number.isNaN(+end)) return rangeMap(start);
  return rangeMap(
    Math.ceil(Math.abs(end - start) / Math.abs(stepSize)),
    (i) => start + i * realStepSize
  );
};

/**
 * Get the sum of a vector while ignoring NaNs
 *
 * @example
 * sum([0, 10, 12, 22])
 * // >> 42
 *
 * @param {number[]} values - Numerical vector
 * @return {number} The sum
 */
export const sum = (values) =>
  values.reduce((s, v) => {
    // Any falsey value (e.g., 0, null, NaN) does not influence the sum
    if (v) return s + v;
    return s;
  }, 0);

export const sumNan = sum;

/**
 * Get the sum vector
 * @param {number[][]} m - Array of vectors
 * @return {number[]} Sum vector
 */
export const sumVector = (m) => {
  switch (m.length) {
    case 0:
      return [];

    case 1:
      return m[0];

    default:
      return m.reduce(
        (_sum, v) => v.map((x, i) => _sum[i] + x),
        new Array(m[0].length).fill(0)
      );
  }
};

/**
 * Get the unique union of two vectors of integers
 * @param {number[]} v - First vector of integers
 * @param {number[]} w - Second vector of integers
 * @return {number[]} Unique union of `v` and `w`
 */
export const unionIntegers = (v, w) => {
  const a = [];
  v.forEach((x) => {
    a[x] = true;
  });
  w.forEach((x) => {
    a[x] = true;
  });
  return a.reduce((union, value, i) => {
    if (value) union.push(i);
    return union;
  }, []);
};
