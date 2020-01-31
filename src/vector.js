export const lDist = l => (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]) ** l, 0) ** (1 / l)
    : undefined;

export const l1Dist = (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
    : undefined;

export const l2Dist = (v, w) =>
  v.length === w.length
    ? v.reduce((sum, x, i) => sum + Math.abs(x - w[i]), 0)
    : undefined;

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
 * Get the mean of a vector
 *
 * @param {array} v - Numerical vector
 * @return {number} The mean
 */
export const mean = v => sum(v) / v.length;

/**
 * Get the minimum number of a vector
 *
 * @description
 * This version is muuuch faster than `Math.min(...v)`.
 *
 * @param {array} v - Numerical vector
 * @return {number} The smallest number
 */
export const min = v => v.reduce((_min, a) => (_min < a ? _min : a), Infinity);

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
