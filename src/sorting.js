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
  { comparator = sortAsc, ignoreNull = false } = {}
) =>
  array
    .map(
      ignoreNull
        ? (v, i) => (v === null ? undefined : [v, i])
        : (v, i) => [v, i]
    )
    .sort((a, b) => comparator(a[0], b[0]))
    .reduce((out, v) => {
      if (!v) return out;
      out.push(v[1]);
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
  { comparator = sortAsc, ignoreNull = false } = {}
) =>
  array
    .map(
      ignoreNull
        ? (v, i) => (v === null ? undefined : [v, i])
        : (v, i) => [v, i]
    )
    .sort((a, b) => comparator(a[0], b[0]))
    .reduce((out, v, i) => {
      if (!v) return out;
      out[v[1]] = i;
      return out;
    }, []);
