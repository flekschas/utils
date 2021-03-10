/**
 * Test if a variable is an array
 * @param {*} f - The variable to test
 * @return {boolean} If `true` the variable is an array.
 */
export const isArray = Array.isArray;

/**
 * Test if a variable is a function
 * @param {*} f - The variable to test
 * @return {boolean} If `true` the variable is a function.
 */
export const isFunction = (f) => !!(f && f.constructor && f.call && f.apply);

/**
 * Tests if a string is a valid HEX color encoding
 * @param {string} hex - HEX-encoded color string.
 * @return {boolean} If `true` the string is a valid HEX color encoding.
 */
export const isHex = (hex) =>
  /(^#[0-9A-Fa-f]{6}$)|(^#[0-9A-Fa-f]{3}$)/i.test(hex);

/**
 * Tests if a number is in `[0,1]`.
 * @param {number} x - Number to be tested.
 * @return {boolean} If `true` the number is in `[0,1]`.
 */
export const isNormFloat = (x) => isNumber(x) && x >= 0 && x <= 1;

/**
 * Tests if an array consist of normalized numbers that are in `[0,1]` only.
 * @param {array} a - Array to be tested
 * @return {boolean} If `true` the array contains only numbers in `[0,1]`.
 */
export const isNormFloatArray = (a) => Array.isArray(a) && a.every(isNormFloat);

/**
 * Test if a variable is a number
 * @param {*} x - Variable to be tested
 * @return {boolean} If `true`, `x` is a number.
 */
export const isNumber = (x) => typeof x === 'number';

/**
 * Test if a variable is a plain object, e.g., `{}`
 * @param {*} o - The variable to test
 * @return {boolean} If `true` the variable is a plain object.
 */
export const isObject = (o) => !!o && o.constructor === Object;

/**
 * Tests if an array is encoding an RGB color.
 * @param {array} rgb - Array to be tested
 * @return {boolean} If `true` the array hold a triple of Uint8 numbers or
 *   a triple of normalized floats.
 */
export const isRgbArray = (rgb) =>
  rgb.length === 3 && (isNormFloatArray(rgb) || isUint8Array(rgb));

/**
 * Tests if an array is encoding an RGBA color.
 * @param   {array}  rgb  Array to be tested
 * @return  {boolean}  If `true` the array hold a quadruple of normalized floats,
 *   a quadruple of Uint8s, or a triple of Uint8 and one normalized float.
 */
export const isRgbaArray = (rgba) =>
  rgba.length === 4 &&
  (isNormFloatArray(rgba) ||
    isUint8Array(rgba) ||
    (isUint8Array(rgba.slice(0, 3)) && isNormFloat(rgba[3])));

/**
 * Tests if a string is encoding an RGB color.
 * @param {string} rgb - String to be tested
 * @return {boolean} If `true` the array hold a triple of Uint8 numbers or
 *   a triple of normalized floats.
 */
export const isRgbStr = (str) =>
  /rgb\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)/i.test(str);

/**
 * Tests if a string is encoding an RGBA color.
 * @param {string} rgb - String to be tested
 * @return {boolean} If `true` the array hold a quadruple of Uint8 numbers or
 *   a quadruple of normalized floats.
 */
export const isRgbaStr = (str) =>
  /rgba\(\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*,\s*[\d.]+\s*\)/i.test(str);

/**
 * Tests if a variable is a string
 * @param {*} s - Variable to be tested
 * @return {boolean} If `true` variable is a string
 */
export const isString = (s) => typeof s === 'string' || s instanceof String;

/**
 * Tests if a number is an interger and in `[0,255]`.
 * @param {number} x - Number to be tested.
 * @return {boolean} If `true` the number is an interger and in `[0,255]`.
 */
export const isUint8 = (x) => Number.isInteger(x) && x >= 0 && x <= 255;

/**
 * Tests if an array consist of Uint8 numbers only.
 * @param {array} a - Array to be tested.
 * @return {boolean} If `true` the array contains only Uint8 numbers.
 */
export const isUint8Array = (a) => Array.isArray(a) && a.every(isUint8);
