import { identity } from "./math";

/**
 * Sort function for sorting in ascending order
 * @param a - The numeric value of the first object to be sorted
 * @param b - The numeric value of the second object to be sorted
 * @return The sort value
 */
export const sortAsc = (a: number, b: number): number => a - b;

/**
 * Sort function for sorting in descending order
 * @param a - The numeric value of the first object to be sorted
 * @param b - The numeric value of the second object to be sorted
 * @return The sort value
 */
export const sortDesc = (a: number, b: number): number => b - a;

/**
 * Return a list of indices sorted by the array
 *
 * @example
 * const X = [9, 5, 11, -1, 0];
 * const sortedIdx = argSort(X);
 * // >> [3, 4, 1, 0, 2]
 * // I.e., the smallest element is X[sortedIdx[0]] == -1
 *
 * @param array - Array of numerical values
 * @param options - Option object
 * @param options.getter - Value getter
 * @param options.comparator - Pairwise value comparator function
 * @param options.ignoreNull - If `true` ignore `null` values
 * @return Array of indices sorted by the values
 */
export const argSort = (
	array: number[],
	{
		getter = identity,
		comparator = sortAsc,
		ignoreNull = false,
	}: {
		getter?: (x: number) => number;
		comparator?: (a: number, b: number) => number;
		ignoreNull?: boolean;
	} = {},
): number[] => {
	const reducer = ignoreNull
		? (out: [number, number][], x: number, i: number) => {
				if (getter(x) !== null) {
					out.push([getter(x), i]);
				}
				return out;
			}
		: (out: [number, number][], x: number, i: number) => {
				out.push([getter(x), i]);
				return out;
			};

	return array
		.reduce(reducer, [])
		.sort((a, b) => comparator(a[0], b[0]))
		.map(([_, i]) => i);
};

/**
 * Return the sort position of each element in an array or object
 *
 * @example
 * ```js
 * let array = [9, 5, 11, -1, 0];
 * let pos = sortPos(array)
 * // >> [3, 2, 4, 0, 1]
 * // I.e., the first element of `array` is at the forth position (`3`)
 *
 * let object = { 1: 9, 2: 5, 11: 11, 100: -1, 999: 0 };
 * let pos = sortPos(object)
 * // >> { 1: 3, 2: 2, 11: 4, 100: 0, 999: 1 }
 * // I.e., the `999`th element of `object` is at the second position (`1`)
 * ```
 *
 * @param ource - Array or object of numerical values
 * @param options - Option object
 * @param options.getter - Value getter
 * @param options.comparator - Sort function
 * @param options.ignoreNull - If `true` ignore `null` values
 * @return Array or object of the sorted value positions
 */
export const sortPos = (
	source: number[] | Record<string, number>,
	{
		getter = identity,
		comparator = sortAsc,
		ignoreNull = false,
	}: {
		getter?: (x: number) => number;
		comparator?: (a: number, b: number) => number;
		ignoreNull?: boolean;
	} = {},
): number[] | Record<string, number> => {
	const reducer = ignoreNull
		? (out: Array<[string, number]>, [key, x]: [string, number]) => {
				if (getter(x) !== null) {
					out.push([key, getter(x)]);
				}
				return out;
			}
		: (out: Array<[string, number]>, [key, x]: [string, number]) => {
				out.push([key, getter(x)]);
				return out;
			};
	return Object.entries(source)
		.reduce(reducer, [])
		.sort((a, b) => comparator(a[1], b[1]))
		.reduce(
			(out, [key, _], i) => {
				out[key] = i;
				return out;
			},
			// biome-ignore lint/suspicious/noExplicitAny: we know this constructor exists
			new (source.constructor as any)(),
		);
};
