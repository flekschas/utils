/**
 * Identity function
 * @param   {*}  x  Any kind of value
 * @return  {*}  `x`
 */
export const identity = x => x;

/**
 * Test if two floats are close given some precision
 * @param {number} a - First float
 * @param {number} b - Second float
 * @param {number} precision - Number of decimal places to check
 * @return {boolean} If `true` the difference between the floats is less than
 *   10^-precision
 */
export const isClose = (a, b, precision = 6) =>
  Math.floor(Math.abs(a - b) * 10 ** precision) === 0;
