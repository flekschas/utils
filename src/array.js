/**
 * Transpose a nested 2D array
 * @param {array} matrix - The matrix-liked 2D nested array to be transposed
 * @return {array} The transposed 2D nested matrix-like array
 */
export const array2dTranspose = matrix => {
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
