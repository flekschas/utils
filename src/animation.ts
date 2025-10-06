/* eslint no-param-reassign:0 */

/**
 * Cubic in easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const cubicIn = (t: number): number => t * t * t;

/**
 * Cubic in and out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const cubicInOut = (t: number): number =>
	t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

/**
 * Cubic out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const cubicOut = (t: number): number => --t * t * t + 1;

/**
 * Linearly interpolate two numbers
 * @param a - The start value
 * @param b - The end value
 * @param p - The interpolation progress. Must be in [0, 1] where `0`
 *   refers to the start value and `1` to the end value
 * @return The interpolated number
 */
export const interpolateNumber = (a: number, b: number, p: number): number => {
	p = Math.min(1, Math.max(0, p));
	return a * (1 - p) + b * p;
};

/**
 * Lineraly interpolate a numerical vector
 * @param a - The start vector
 * @param b - The end vector
 * @param p - The interpolation progress. Must be in [0, 1] where `0`
 *   refers to the start vector and `1` to the end vector
 * @return The interpolated vector
 */
export const interpolateVector = (
	a: number[],
	b: number[],
	p: number,
): number[] => a.map((x, i) => interpolateNumber(x, b[i], p));

/**
 * Linear easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return Same as the input
 */
export const linear = (t: number): number => t;

/**
 * Quadratic in easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quadIn = (t: number): number => t * t;

/**
 * Quadratic in and out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quadInOut = (t: number): number =>
	t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

/**
 * Quadratic out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quadOut = (t: number): number => t * (2 - t);

/**
 * Quartic in easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quartIn = (t: number): number => t * t * t * t;

/**
 * Quartic in and out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quartOut = (t: number): number => 1 - --t * t * t * t;

/**
 * Quartic out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quartInOut = (t: number): number =>
	t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;

/**
 * Quintic in easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quintIn = (t: number): number => t * t * t * t * t;

/**
 * Quintic in and out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quintOut = (t: number): number => 1 + --t * t * t * t * t;

/**
 * Quintic out easing function
 * @param t - The input time to be eased. Must be in [0, 1] where `0`
 *   refers to the start and `1` to the end
 * @return The eased time
 */
export const quintInOut = (t: number): number =>
	t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
