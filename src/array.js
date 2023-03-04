import { identity } from './math';

/**
 * Transpose a nested 2D array
 * @param {array} matrix - The matrix-liked 2D nested array to be transposed
 * @return {array} The transposed 2D nested matrix-like array
 */
export const array2dTranspose = (matrix) => {
  // Create a nested 2D array with transposed shape
  const out = [...new Array(matrix[0].length).fill().map(() => [])];

  // Fill the transposed array
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      out[j][i] = matrix[i][j];
    }
  }

  return out;
};

/**
 * Clear an array without while keeping it's reference
 * @param {array} a - Array to be cleared
 * @return {array} The array itself
 */
export const clearArray = (a) => {
  a.splice(0, a.length);
  return a;
};

/**
 * Check if two arrays contain the same elements
 * @param {array} a - First array
 * @param {array} b - Second array
 * @return {boolean} If `true` the two arrays contain the same elements
 */
export const hasSameElements = (a, b) => {
  if (a === b) return true;
  if (a.length !== b.length) return false;
  const aSet = new Set(a);
  const bSet = new Set(b);
  // Since the arrays could contain duplicates, we have to check the set length
  // as well
  if (aSet.size !== bSet.size) return false;
  return b.every((element) => aSet.has(element));
};

/**
 * Return unique values of an array
 * @param {array} a - Input array
 * @return {array} Array with unique values
 */
export const unique = (a, getter = identity) => {
  const s = new Set();
  const out = [];

  for (let i = 0; i < a.length; i++) {
    const v = getter(a[i]);
    if (!s.has(v)) {
      s.add(v);
      out.push(v);
    }
  }

  return out;
};
