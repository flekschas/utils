import { identity } from './math';
import { isFunction } from './type-checking';

/**
 * Aggregate a vector using one or more aggregators. Like a multi-purpose reducer.
 * @param {array} v - Numerivcal vector
 * @param {array|function} aggregater - A single or multiple aggregator functions. The aggregator functions work like reducers.
 * @param {array|number} startValue - A single or multiple start values
 * @param {function} options.getter - A value getter
 * @return {array|number} A single or multiple aggregagted values
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
 * @param {array} v - Numerical vectors
 * @param {array} w - Numerical vectors
 * @return {array} Difference vector
 */
export const diff = (v, w) => v.map((x, i) => x - w[i]);

/**
 * L distance between a pair of vectors
 *
 * @param {array} l - Defines the Lp space
 * @param {number} dim - Dimension of the input data (Optional)
 */
export const lDist = (l, dim) => {
  if (Number.isNaN(+dim)) {
    /**
     * L distance function
     * @param {array} v - First vector
     * @param {array} w - Second vector
     * @return {array} L distance
     */
    return (v, w) =>
      v.length === w.length
        ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]) ** l, 0) ** (1 / l)
        : undefined;
  }

  const body = Array(dim)
    .fill()
    .map((_, i) => `s += Math.abs(v[${i}] - w[${i}]) ** l;`)
    .join(' ');
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
 * @description
 * This is identical but much faster than `lDist(1)(v, w)`
 *
 * @param {array} v - First vector
 * @param {array} w - Second vector
 * @return {array} L2 distance
 */
export const l1Dist = (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
    : undefined;

/**
 * Creates a l1 distance function tailored to the dimension of the data
 *
 * @description
 * This is identical but faster than `l1Dist(v, w)`
 *
 * @param {number} dim - Dimension of the input data
 * @return {function} A function with the same signature as `l1Dist`
 */
export const l1DistByDim = dim => {
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
 * @description
 * This is identical but much faster than `lDist(2)(v, w)`
 *
 * @param {array} v - First vector
 * @param {array} w - Second vector
 * @return {array} L2 distance
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
export const l2DistByDim = dim => {
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
 * @param {array} v - Numerical vector
 * @return {number} L2 norm
 */
export const l2Norm = v => Math.sqrt(v.reduce((sum, x) => sum + x ** 2, 0));

/**
 * Get the maximum number of a vector
 *
 * @description
 * This version is muuuch faster than `Math.max(...v)`.
 *
 * @param {array} v - Numerical vector
 * @return {number} The largest number
 */
export const max = v => v.reduce((_max, a) => (_max > a ? _max : a), -Infinity);

/**
 * Get the max vector
 * @param {array} m - Array of vectors
 * @return {array} Max vector
 */
export const maxVector = m => {
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
 * @param {array} v - Numerical vector
 * @return {number} The mean
 */
export const mean = v => sum(v) / v.length;

/**
 * Get the mean vector
 * @param {array} m - Array of vectors
 * @return {array} Mean vector
 */
export const meanVector = m => {
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
 * Get the minimum number of a vector
 *
 * @description
 * This version is muuuch faster than `Math.min(...v)` and support longer
 * vectors than 256^2, which is a limitation of `Math.min.apply(null, v)`.
 *
 * @param {array} v - Numerical vector
 * @return {number} The smallest number
 */
export const min = v => v.reduce((_min, a) => (_min < a ? _min : a), Infinity);

/**
 * Get the min vector
 * @param {array} m - Array of vectors
 * @return {array} Min vector
 */
export const minVector = m => {
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
export const normalize = v => {
  const norm = l2Norm(v);
  return v.map(x => x / norm);
};

/**
 * A function to created a range array
 * @param   {number}  start  Start of the range (included)
 * @param   {number}  end  End of the range (excluded)
 * @param   {number}  stepSize  Increase per step
 * @return  {array}  Range array
 */
export const range = (start, end, stepSize = 1) =>
  Array(Math.ceil((end - start) / stepSize))
    .fill()
    .map((x, i) => start + i * stepSize);

/**
 * Get the sum of a vector
 *
 * @param {array} v - Numerical vector
 * @return {number} The sum
 */
export const sum = values => values.reduce((s, v) => s + v, 0);

/**
 * Get the sum vector
 * @param {array} m - Array of vectors
 * @return {array} Sum vector
 */
export const sumVector = m => {
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
