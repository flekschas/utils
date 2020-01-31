/**
 * Identity function
 * @param   {*}  x  Any kind of value
 * @return  {*}  `x`
 */
export const identity = x => x;

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
 * Get the sum of a vector
 *
 * @param {array} v - Numerical vector
 * @return {number} The sum
 */
export const sum = values => values.reduce((s, v) => s + v, 0);
