/* eslint no-param-reassign:0 */

/**
 * Cubic in easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const cubicIn = t => t * t * t;

/**
 * Cubic in and out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const cubicInOut = t =>
  t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 * Cubic out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const cubicOut = t => --t * t * t + 1;

/**
 * Linearly interpolate two numbers
 * @param {number} a - The start value
 * @param {number} b - The end value
 * @param {number} p - The interpolation progress. Must be in [0, 1] where `0`
 *   refers to the start value and `1` to the end value
 * @return {number} The interpolated number
 */
export const interpolateNumber = (a, b, p) => {
  // eslint-disable-next-line no-param-reassign
  p = Math.min(1, Math.max(0, p));
  return a * (1 - p) + b * p;
};

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

/**
 * Linear easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} Same as the input
 */
export const linear = t => t;

/**
 * Quadratic in easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quadIn = t => t * t;

/**
 * Quadratic in and out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quadInOut = t => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

/**
 * Quadratic out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quadOut = t => t * (2 - t);

/**
 * Quartic in easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quartIn = t => t * t * t * t;

/**
 * Quartic in and out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quartOut = t => 1 - --t * t * t * t;

/**
 * Quartic out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quartInOut = t =>
  t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

/**
 * Quintic in easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quintIn = t => t * t * t * t * t;

/**
 * Quintic in and out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quintOut = t => 1 + --t * t * t * t * t;

/**
 * Quintic out easing function
 * @param {number} t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return {number} The eased time
 */
export const quintInOut = t =>
  t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
