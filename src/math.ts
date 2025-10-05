/**
 * Restrict value to be within [min, max]
 * @description About 18% faster than `Math.max(min, Math.min(max, value))`
 * @param value - Value to be clamped
 * @param min - Min value
 * @param max - Max value
 * @return Clamped value
 */
export const clamp = (value: number, min: number, max: number): number =>
	// eslint-disable-next-line no-nested-ternary
	value < min ? min : value > max ? max : value;

/**
 * Identity function
 * @param x - Any kind of value
 * @return `x`
 */
export const identity = <T>(x: T): T => x;

/**
 * Test if two floats are close given some precision
 * @param a - First float
 * @param b - Second float
 * @param precision - Number of decimal places to check
 * @return If `true` the difference between the floats is less than
 *   10^-precision
 */
export const isClose = (a: number, b: number, precision = 6): boolean =>
	Math.abs(a - b) < 10 ** -precision;
