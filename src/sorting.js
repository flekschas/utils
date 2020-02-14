import { identity } from './math';

export const sortAsc = (a, b) => a - b;

export const sortDesc = (a, b) => b - a;

/**
 * Return a list of indices sorted by the array
 *
 * @example
 *   X = [9, 5, 11, -1, 0]
 *   sortedIdx = argSort(X)
 *   >> [3, 4, 1, 0, 2]
 *   I.e., the smallest element is X[sortedIdx[0]] == -1
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
 * Return the sort position of each element in a list
 *
 * @example
 *   X = [9, 5, 11, -1, 0]
 *   idxPos = sortPos(X)
 *   >> [3, 2, 4, 0, 1]
 *   I.e., the first element of X is at position idxPos[0] == 3
 *
 * @param {array} array - Array of numerical values
 * @param {function} comparator - Pairwise value comparator function
 * @return {array} Array of the sorted value positions
 */
export const sortPos = (
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
    .reduce((out, tuple, i) => {
      if (!tuple) return out;
      out[tuple[1]] = i;
      return out;
    }, []);
