/**
 * Store the values of an iterator in an array.
 *
 * @description This code is about 9x faster than `Array.from()`.
 *
 * @param iter - The map whose keys are to be converted to an array
 * @return The array with the map keys
 */
export const iteratorToArray = <S>(iter: Iterable<S>): S[] => {
	const keys: S[] = [];
	// eslint-disable-next-line no-restricted-syntax
	for (const value of iter) {
		keys.push(value);
	}
	return keys;
};

/**
 * Parse a primitive value into a human readable string.
 *
 * @example
 * ```js
 * stringifyPrimitive('test') // => 'test'
 * stringifyPrimitive(42) // => '42'
 * stringifyPrimitive(NaN) // => 'NaN'
 * stringifyPrimitive(true) // => 'true'
 * stringifyPrimitive(null) // => 'null'
 * stringifyPrimitive(undefined) // => 'undefined'
 * ```
 *
 * @param primitive - A primitive value
 * @return The stringified version
 */
export const stringifyPrimitive = (
	primitive: string | number | boolean | null | undefined,
): string => {
	if (primitive === undefined) return "undefined";
	if (primitive === null) return "null";
	if (primitive === true) return "true";
	if (primitive === false) return "false";
	return primitive.toString();
};

/**
 * Parse a string into primitive value.
 *
 * @example
 * ```js
 * parsePrimitive('test') // => 'test'
 * parsePrimitive('42') // => 42
 * parsePrimitive('NaN') // => NaN
 * parsePrimitive('true') // => true
 * parsePrimitive('null') // => null
 * parsePrimitive('undefined') // => undefined
 * ```
 *
 * @param string - A stringified primitive value
 * @return The primitive version
 */
export const parsePrimitive = (
	string: string,
): string | number | boolean | null | undefined => {
	if (string === "undefined") return undefined;
	if (string === "null") return null;
	if (string === "true") return true;
	if (string === "false") return false;
	if (!Number.isNaN(Number(string))) return Number(string);
	return string;
};
