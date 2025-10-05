import { identity } from "./math";
import { isFunction } from "./type-checking";

/**
 * Aggregate a vector using one or more aggregators. Like a multi-purpose reducer.
 * @param v - Numerivcal vector
 * @param aggregater - A single or multiple aggregator
 *   functions. The aggregator functions work like reducers.
 * @param startValue - A single or multiple start values
 * @param options.getter - A value getter
 * @return A single or multiple aggregagted values
 */
export const aggregate = (
	v: number[],
	aggregater:
		| ((acc: number, val: number) => number)
		| ((acc: number, val: number) => number)[],
	startValue: number | number[],
	{ getter = identity } = {},
): number | number[] => {
	const isSingle = isFunction(aggregater);

	const aggregaters = isSingle
		? [aggregater as (acc: number, val: number) => number]
		: (aggregater as ((acc: number, val: number) => number)[]);
	const startValues = isSingle
		? [startValue as number]
		: (startValue as number[]);

	const out = v.reduce(
		(aggregates, x) => aggregaters.map((fn, i) => fn(aggregates[i], getter(x))),
		startValues === undefined ? Array(aggregaters.length).fill(0) : startValues,
	);

	return isSingle ? out[0] : out;
};

/**
 * Get the difference of two vectoe
 * @param v - Numerical vectors
 * @param w - Numerical vectors
 * @return Difference vector
 */
export const diff = (v: number[], w: number[]): number[] =>
	v.map((x, i) => x - w[i]);

/**
 * L distance between a pair of vectors
 *
 * @param l - Defines the Lp space
 * @param dim - Dimension of the input data (Optional)
 * @returns A function to calculate the `l` distance between
 *   a pair of vectors.
 */
export const lDist = (
	l: number,
	dim: number,
): ((v: number[], w: number[]) => number | undefined) => {
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
		(_, i) => `s += Math.abs(v[${i}] - w[${i}]) ** l;`,
	).join(" ");

	return new Function(
		"v",
		"w",
		`const l = ${l}; let s = 0; ${body} return s ** (1 / l);`,
	) as (v: number[], w: number[]) => number | undefined;
};

/**
 * L1 distance between a pair of vectors
 *
 * @description This is identical but much faster than `lDist(1)(v, w)`
 * @param v - First vector
 * @param w - Second vector
 * @return L2 distance
 */
export const l1Dist = (v: number[], w: number[]): number | undefined =>
	v.length === w.length
		? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
		: undefined;

/**
 * Creates a l1 distance function tailored to the dimension of the data
 *
 * @description This is identical but faster than `l1Dist(v, w)`.
 * @param dim - Dimension of the input data
 * @return A function with the same signature as `l1Dist`
 */
export const l1DistByDim = (
	dim: number,
): ((v: number[], w: number[]) => number) => {
	const body = Array(dim)
		.fill(undefined)
		.map((_, i) => `s += Math.abs(v[${i}] - w[${i}]);`)
		.join(" ");
	// eslint-disable-next-line no-new-func
	return new Function("v", "w", `let s = 0; ${body} return s;`) as (
		v: number[],
		w: number[],
	) => number;
};

/**
 * L2 distance between a pair of vectors
 *
 * @description This is identical but much faster than `lDist(2)(v, w)`.
 * @param v - First vector
 * @param w - Second vector
 * @return L2 distance
 */
export const l2Dist = (v: number[], w: number[]): number | undefined =>
	v.length === w.length
		? Math.sqrt(v.reduce((sum, x, i) => sum + (x - w[i]) ** 2, 0))
		: undefined;

/**
 * Creates a l2 distance function tailored to the dimension of the data
 *
 * @description
 * This is identical but faster than `l2Dist(v, w)`
 *
 * @param dim - Dimension of the input data
 * @return A function with the same signature as `l2Dist`
 */
export const l2DistByDim = (
	dim: number,
): ((v: number[], w: number[]) => number) => {
	const body = Array(dim)
		.fill(undefined)
		.map((_, i) => `s += Math.pow(v[${i}] - w[${i}], 2);`)
		.join(" ");
	return new Function("v", "w", `let s = 0; ${body} return Math.sqrt(s);`) as (
		v: number[],
		w: number[],
	) => number;
};

/**
 * Vector L2 norm
 *
 * @description
 * This is identical but much faster than `Math.hypot(...v)`
 *
 * @param v - Numerical vector
 * @return L2 norm
 */
export const l2Norm = (v: number[]): number =>
	Math.sqrt(v.reduce((sum, x) => sum + x ** 2, 0));

/**
 * Get the maximum number of a vector while ignoring NaNs
 *
 * @description
 * This version is muuuch faster than `Math.max(...v)` and supports vectors
 * longer than 256^2, which is a limitation of `Math.max.apply(null, v)`.
 *
 * @param v - Numerical vector
 * @return The largest number
 */
export const max = (v: number[]): number =>
	v.reduce((_max, a) => (a > _max ? a : _max), Number.NEGATIVE_INFINITY);

export const maxNan = max;

/**
 * Get the max vector
 * @param m - Array of vectors
 * @return Max vector
 */
export const maxVector = (m: number[][]): number[] => {
	switch (m.length) {
		case 0:
			return [];

		case 1:
			return m[0];

		default:
			return m.reduce(
				(_max, v) => v.map((x, i) => (_max[i] > x ? _max[i] : x)),
				new Array(m[0].length).fill(Number.NEGATIVE_INFINITY),
			);
	}
};

/**
 * Get the mean of a vector
 *
 * @param v - Numerical vector
 * @return The mean
 */
export const mean = (v: number[]): number => sum(v) / v.length;

/**
 * Get the mean of a vector while ignoring NaNs
 *
 * @description Roughly 30% slower than `mean()`
 * @param v - Numerical vector
 * @return The mean
 */
export const meanNan = (v: number[]): number => {
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
 * @param m - Array of vectors
 * @return Mean vector
 */
export const meanVector = (m: number[][]): number[] => {
	switch (m.length) {
		case 0:
			return [];

		case 1:
			return m[0];

		default:
			return m.reduce(
				(_mean, v) => v.map((x, i) => _mean[i] + x / m.length),
				new Array(m[0].length).fill(0),
			);
	}
};

/**
 * Get the median of a vector
 *
 * @param v - Numerical vector
 * @return The median
 */
export const median = (v: number[]): number => v[Math.floor(v.length / 2)];

/**
 * Get the median vector
 * @param m - Array of vectors
 * @return The median vector
 */
export const medianVector = median;

/**
 * Get the minimum number of a vector while ignoring NaNs
 *
 * @description
 * This version is muuuch faster than `Math.min(...v)` and supports vectors
 * longer than 256^2, which is a limitation of `Math.min.apply(null, v)`.
 *
 * @param v - Numerical vector
 * @return The smallest number
 */
export const min = (v: number[]): number =>
	v.reduce((_min, a) => (a < _min ? a : _min), Number.POSITIVE_INFINITY);

export const minNan = min;

/**
 * Get the min vector
 * @param m - Array of vectors
 * @return Min vector
 */
export const minVector = (m: number[][]): number[] => {
	switch (m.length) {
		case 0:
			return [];

		case 1:
			return m[0];

		default:
			return m.reduce(
				(_min, v) => v.map((x, i) => (_min[i] < x ? _min[i] : x)),
				new Array(m[0].length).fill(Number.POSITIVE_INFINITY),
			);
	}
};

/**
 * Non-negative modulo function. E.g., `mod(-1, 5) === 4` while `-1 % 5 === -1`.
 *
 * @param x - Dividend
 * @param y - Divisor
 * @return Remainder
 */
export const mod = (x: number, y: number): number => ((x % y) + x) % y;

/**
 * Normalize vector
 * @param v - Numerical vector
 * @return Unit vector
 */
export const normalize = (v: number[]): number[] => {
	const norm = l2Norm(v);
	return v.map((x) => x / norm);
};

/**
 * Initialize an array of a certain length using a mapping function
 *
 * @description
 * This is equivalent to `Array.from({ length }, mapFn)` but about 60% faster
 *
 * @param length - Size of the array
 * @param mapFn - Mapping function
 * @return Initialized array
 */
export const rangeMap = (
	length: number,
	mapFn: (i: number, length: number) => number = identity,
): number[] => {
	const out: number[] = [];
	for (let i = 0; i < length; i++) {
		out.push(mapFn(i, length));
	}
	return out;
};

/**
 * A function to created a range array
 * @param start - Start of the range (included)
 * @param end - End of the range (excluded)
 * @param stepSize - Increase per step
 * @return Range array
 */
export const range = (start: number, end: number, stepSize = 1): number[] => {
	const realStepSize = stepSize * Math.sign(end - start);
	if (Number.isNaN(+end)) return rangeMap(start);
	return rangeMap(
		Math.ceil(Math.abs(end - start) / Math.abs(stepSize)),
		(i) => start + i * realStepSize,
	);
};

/**
 * Get the sum of a vector while ignoring NaNs
 *
 * @example
 * sum([0, 10, 12, 22])
 * // >> 42
 *
 * @param values - Numerical vector
 * @return The sum
 */
export const sum = (values: number[]): number =>
	values.reduce((s, v) => {
		// Any falsey value (e.g., 0, null, NaN) does not influence the sum
		if (v) return s + v;
		return s;
	}, 0);

export const sumNan = sum;

/**
 * Get the sum vector
 * @param m - Array of vectors
 * @return Sum vector
 */
export const sumVector = (m: number[][]): number[] => {
	switch (m.length) {
		case 0:
			return [];

		case 1:
			return m[0];

		default:
			return m.reduce(
				(_sum, v) => v.map((x, i) => _sum[i] + x),
				new Array(m[0].length).fill(0),
			);
	}
};

/**
 * Get the unique union of two vectors of integers
 * @param v - First vector of integers
 * @param w - Second vector of integers
 * @return Unique union of `v` and `w`
 */
export const unionIntegers = (v: number[], w: number[]): number[] => {
	const a: boolean[] = [];
	v.forEach((x) => {
		a[x] = true;
	});
	w.forEach((x) => {
		a[x] = true;
	});
	return a.reduce((union, value, i) => {
		if (value) union.push(i);
		return union;
	}, [] as number[]);
};
