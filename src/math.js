/**
 * Restrict value to be within [min, max]
 * @description About 18% faster than `Math.max(min, Math.min(max, value))`
 * @param {Number} value - Value to be clamped
 * @param {Number} min - Min value
 * @param {Number} max - Max value
 * @return {Number} Clamped value
 */
export const clamp = (value, min, max) =>
  // eslint-disable-next-line no-nested-ternary
  value < min ? min : value > max ? max : value;

/**
 * Identity function
 * @param   {*}  x  Any kind of value
 * @return  {*}  `x`
 */
export const identity = (x) => x;

/**
 * Test if two floats are close given some precision
 * @param {number} a - First float
 * @param {number} b - Second float
 * @param {number} precision - Number of decimal places to check
 * @return {boolean} If `true` the difference between the floats is less than
 *   10^-precision
 */
export const isClose = (a, b, precision = 6) =>
  Math.abs(a - b) < 10 ** -precision;
