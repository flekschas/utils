import { identity } from './math';

/**
 * Sort function for sorting in ascending order
 * @param {number} a - The numeric value of the first object to be sorted
 * @param {number} b - The numeric value of the second object to be sorted
 * @return {number} The sort value
 */
export const sortAsc = (a, b) => a - b;

/**
 * Sort function for sorting in descending order
 * @param {number} a - The numeric value of the first object to be sorted
 * @param {number} b - The numeric value of the second object to be sorted
 * @return {number} The sort value
 */
export const sortDesc = (a, b) => b - a;

/**
 * Return a list of indices sorted by the array
 *
 * @example
 * const X = [9, 5, 11, -1, 0];
 * const sortedIdx = argSort(X);
 * // >> [3, 4, 1, 0, 2]
 * // I.e., the smallest element is X[sortedIdx[0]] == -1
 *
 * @param {array} array - Array of numerical values
 * @param {function} comparator - Pairwise value comparator function
 * @return {array} Array of indices sorted by the values
 */
export const argSort = (
  array,
  { getter = identity, comparator = sortAsc, ignoreNull = false } = {}
) =>
  array
    .map(
      ignoreNull
        ? (x, i) => (getter(x) === null ? undefined : [getter(x), i])
        : (x, i) => [getter(x), i]
    )
    .sort((a, b) => comparator(a[0], b[0]))
    .reduce((out, tuple) => {
      if (!tuple) return out;
      out.push(tuple[1]);
      return out;
    }, []);

/**
 * @typedef {Object} SortPosOptions Option object of `sortPos()`
 * @property {(v: any) => number} getter Value getter
 * @property {(a: number, b: number) => number} comparator Sort function
 * @property {Boolean} ignoreNull If `true` ignore `null` values
 */

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
 * @param {number[] | object} source - Array or object of numerical values
 * @param {SortPosOptions} options - Option object
 * @return {array | object} Array or object of the sorted value positions
 */
export const sortPos = (
  source,
  { getter = identity, comparator = sortAsc, ignoreNull = false } = {}
) =>
  Object.entries(source)
    .map(
      ignoreNull
        ? ([idx, x]) => (getter(x) === null ? undefined : [idx, getter(x)])
        : ([idx, x]) => [idx, getter(x)]
    )
    .sort((a, b) => comparator(a[1], b[1]))
    .reduce((out, tuple, i) => {
      if (!tuple) return out;
      out[tuple[0]] = i;
      return out;
    }, new source.constructor());
