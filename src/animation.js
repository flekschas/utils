/**
 * Cubic in and out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const cubicInOut = t => {
  // eslint-disable-next-line no-param-reassign
  t *= 2;
  // eslint-disable-next-line
  return (t <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
};

/**
 * Linearly interpolate two numbers
 * @param {number} a - The start value
 * @param {number} b - The end value
 * @param {number} p - The interpolation progress. Must be in [0, 1] where `0`
 *   refers to the start value and `1` to the end value
 * @return {number} The interpolated number
 */
export const interpolateNumber = (a, b, p) => a * (1 - p) + b * p;

/**
 * Lineraly interpolate a numerical vector
 * @param {array} a - The start vector
 * @param {array} b - The end vector
 * @param {number} p - The interpolation progress. Must be in [0, 1] where `0`
 *   refers to the start vector and `1` to the end vector
 * @return {array} The interpolated vector
 */
export const interpolateVector = (a, b, p) =>
  a.map((x, i) => interpolateNumber(x, b[i], p));
