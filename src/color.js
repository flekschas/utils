import {
  isHex,
  isNormFloatArray,
  isRgbArray,
  isRgbaArray
} from './type-checking';
import { normalize as norm } from './vector';

/**
 * Convert a HEX string to its decimal representation
 * @param {string} hex - HEX string
 * @return {number} Decimal representation
 */
export const decToRgb = dec => [dec >> 16, (dec >> 8) % 256, dec % 256];

/**
 * Convert a HEX string to its decimal representation
 * @param {string} hex - HEX string
 * @return {number} Decimal representation
 */
export const hexToDec = hex => parseInt(hex.substr(1), 16);

/**
 * Convert a HEX-encoded color to an RGB-encoded color
 * @param {string} hex - HEX-encoded color string.
 * @param {boolean} normalize - If `true` the returned RGB values will be
 *   normalized to `[0,1]`.
 * @return {array} Triple holding the RGB values.
 */
export const hexToRgbArray = (hex, normalize = false) =>
  hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`
    )
    .substring(1)
    .match(/.{2}/g)
    .map(x => parseInt(x, 16) / 255 ** normalize);

/**
 * Convert a HEX-encoded color to an RGBA-encoded color
 * @param {string} hex - HEX-encoded color string.
 * @param {boolean} normalize - If `true` the returned RGBA values will be
 *   normalized to `[0,1]`.
 * @return {array} Triple holding the RGBA values.
 */
export const hexToRgbaArray = (hex, normalize = false) => [
  ...hexToRgbArray(hex, normalize),
  255 ** !normalize
];

/**
 * Convert RGB(A) string to its array representation
 * @param {string} rgbStr - RGB(A) string
 * @return {number} RGB(A) array
 */
export const rgbStrToRgbArray = rgbStr =>
  rgbStr
    .match(/[\d.]+/g)
    .slice(0, 4)
    .map(x => +x);

/**
 * Same as `rgbStrToRgbArray()`
 */
export const rgbaStrToRgbaArray = rgbStrToRgbArray;

/**
 * Convert RGB string to its decimal representation
 * @param {string} rgbStr - RGB string
 * @return {number} Decimal representation
 */
export const rgbStrToDec = rgbStr =>
  rgbStrToRgbArray(rgbStr)
    .slice(0, 3)
    // eslint-disable-next-line no-bitwise
    .map((x, i) => +x << (8 * (2 - i)))
    .reduce((x, sum) => sum + x, 0);

/**
 * Convert RGB values to a HEX string
 * @param {number} r - Red component
 * @param {number} g - Green component
 * @param {number} b - Blue component
 * @return {string} HEX string
 */
export const rgbToHex = (r, g, b) => {
  const componentToHex = c => {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

/**
 * Convert a color to an RGBA color
 * @param {*} color - Color to be converted. Currently supports:
 *   HEX, RGB, or RGBA.
 * @param {boolean} normalize - If `true` the returned RGBA values will be
 *   normalized to `[0,1]`.
 * @return{array} Quadruple defining an RGBA color.
 */
export const toRgbaArray = (color, normalize) => {
  if (isRgbaArray(color))
    return normalize && !isNormFloatArray(color) ? normalize(color) : color;

  if (isRgbArray(color))
    return [...(normalize ? norm(color) : color), 255 ** !normalize];

  if (isHex(color)) return hexToRgbaArray(color, normalize);

  console.warn(
    'Only HEX, RGB, and RGBA are handled by this function. Returning white instead.'
  );

  return normalize ? [1, 1, 1, 1] : [255, 255, 255, 255];
};
