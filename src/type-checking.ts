/**
 * Test if a variable is an array
 * @param a - The variable to test
 * @return If `true` the variable is an array.
 */
export const isArray = (a: unknown): a is unknown[] => Array.isArray(a);

/**
 * Test if a variable is a function
 * @param f - The variable to test
 * @return If `true` the variable is a function.
 */
export const isFunction = (f: unknown): f is (...rest: unknown[]) => unknown =>
	typeof f === "function";

/**
 * Tests if a string is a valid HEX color encoding
 * @param hex - HEX-encoded color string.
 * @return If `true` the string is a valid HEX color encoding.
 */
export const isHex = (hex: string): boolean =>
	/(^#[0-9A-Fa-f]{6}$)|(^#[0-9A-Fa-f]{3}$)/i.test(hex);

/**
 * Tests if a number is in `[0,1]`.
 * @param x - Number to be tested.
 * @return If `true` the number is in `[0,1]`.
 */
export const isNormFloat = (x: number): boolean =>
	isNumber(x) && x >= 0 && x <= 1;

/**
 * Tests if an array consist of normalized numbers that are in `[0,1]` only.
 * @param a - Array to be tested
 * @return If `true` the array contains only numbers in `[0,1]`.
 */
export const isNormFloatArray = (a: number[]): boolean =>
	Array.isArray(a) && a.every(isNormFloat);

/**
 * Test if a variable is a number
 * @param x - Variable to be tested
 * @return If `true`, `x` is a number.
 */
export const isNumber = (x: unknown): x is number => typeof x === "number";

/**
 * Test if a variable is a plain object, e.g., `{}`
 * @param o - The variable to test
 * @return If `true` the variable is a plain object.
 */
export const isObject = <T extends {}>(o: unknown): o is T =>
	!!o && o.constructor === Object;

/**
 * Tests if an array is encoding an RGB color.
 * @param rgb - Array to be tested
 * @return If `true` the array hold a triple of Uint8 numbers or
 *   a triple of normalized floats.
 */
export const isRgbArray = (rgb: number[]): boolean =>
	rgb.length === 3 && (isNormFloatArray(rgb) || isUint8Array(rgb));

/**
 * Tests if an array is encoding an RGBA color.
 * @param rgba - Array to be tested
 * @return If `true` the array hold a quadruple of normalized floats,
 *   a quadruple of Uint8s, or a triple of Uint8 and one normalized float.
 */
export const isRgbaArray = (rgba: number[]): boolean =>
	rgba.length === 4 &&
	(isNormFloatArray(rgba) ||
		isUint8Array(rgba) ||
		(isUint8Array(rgba.slice(0, 3)) && isNormFloat(rgba[3])));

/**
 * Tests if a string is encoding an RGB color.
 * @param str - String to be tested
 * @return If `true` the array hold a triple of Uint8 numbers or
 *   a triple of normalized floats.
 */
export const isRgbStr = (str: string): boolean =>
	/rgb\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)/i.test(str);

/**
 * Tests if a string is encoding an RGBA color.
 * @param str - String to be tested
 * @return If `true` the array hold a quadruple of Uint8 numbers or
 *   a quadruple of normalized floats.
 */
export const isRgbaStr = (str: string): boolean =>
	/rgba\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)/i.test(str);

/**
 * Tests if a variable is a string
 * @param s - Variable to be tested
 * @return If `true` variable is a string
 */
export const isString = (s: unknown): s is string =>
	typeof s === "string" || s instanceof String;

/**
 * Tests if a number is an interger and in `[0,255]`.
 * @param x - Number to be tested.
 * @return If `true` the number is an interger and in `[0,255]`.
 */
export const isUint8 = (x: number): boolean =>
	Number.isInteger(x) && x >= 0 && x <= 255;

/**
 * Tests if an array consist of Uint8 numbers only.
 * @param a - Array to be tested.
 * @return If `true` the array contains only Uint8 numbers.
 */
export const isUint8Array = (a: number[]): boolean =>
	Array.isArray(a) && a.every(isUint8);
