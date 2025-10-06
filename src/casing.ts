/**
 * Convert from camelCase to CONST_CASE
 * @example
 * ```js
 * camelToConst('myCamelCaseString') // => 'MY_CAMEL_CASE_STRING'
 * ```
 * @param str - The camelCase string to be converted to CONST_CASE
 * @return The resulting string in CONST_CASE
 */
export const camelToConst = (str: string): string =>
	str
		.split(/(?=[A-Z])/)
		.join("_")
		.toUpperCase();

/**
 * Convert a string captical case
 * @example
 * ```js
 * capitalize('my string') // => 'My string'
 * ```
 * @param str - The string to be converted
 * @return The resulting string in capitcal case
 */
export const capitalize = (str: string): string =>
	`${str[0].toUpperCase()}${str.substring(1)}`;
