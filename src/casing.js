/**
 * Convert from camelCase to CONST_CASE
 * @example
 * ```js
 * camelToConst('myCamelCaseString') // => 'MY_CAMEL_CASE_STRING'
 * ```
 * @param {string} str - The camelCase string to be converted to CONST_CASE
 * @return {string} The resulting string in CONST_CASE
 */
export const camelToConst = (str) =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

/**
 * Convert a string captical case
 * @example
 * ```js
 * capitalize('my string') // => 'My string'
 * ```
 * @param {string} str - The string to be converted
 * @return {string} The resulting string in capitcal case
 */
export const capitalize = (str) => `${str[0].toUpperCase()}${str.substring(1)}`;
