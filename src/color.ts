import {
	isArray,
	isHex,
	isNormFloatArray,
	isRgbArray,
	isRgbaArray,
	isString,
} from "./type-checking";
import { normalize } from "./vector";

/**
 * Convert a decimal to its RGB representation
 * @param dec - Decimal-encoded color.
 * @return RGB array
 */
export const decToRgb = (dec: number): number[] => [
	dec >> 16,
	(dec >> 8) % 256,
	dec % 256,
];

/**
 * Convert a HEX string to its decimal representation
 * @param hex - HEX string
 * @return Decimal representation
 */
export const hexToDec = (hex: string): number =>
	Number.parseInt(hex.substring(1), 16);

/**
 * Convert a HEX-encoded color to an RGB-encoded color
 * @param hex - HEX-encoded color string.
 * @param normalizeColor - If `true` the returned RGB values will be
 *   normalized to `[0,1]`.
 * @return Triple holding the RGB values.
 */
export const hexToRgbArray = (
	hex: string,
	normalizeColor?: boolean,
): [number, number, number] =>
	(hex
		.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			(_m, r, g, b) => `#${r}${r}${g}${g}${b}${b}`,
		)
		.substring(1)
		.match(/.{2}/g)
		?.map(
			(x) => Number.parseInt(x, 16) / 255 ** Number(Boolean(normalizeColor)),
		) as [number, number, number]) || ([0, 0, 0] as [number, number, number]);

/**
 * Convert a HEX-encoded color to an RGBA-encoded color
 * @param hex - HEX-encoded color string.
 * @param normalizeColor - If `true` the returned RGBA values will be
 *   normalized to `[0, 1]`.
 * @return Quadruple holding the RGBA values.
 */
export const hexToRgbaArray = (
	hex: string,
	normalizeColor?: boolean,
): [number, number, number, number] => [
	...hexToRgbArray(hex, normalizeColor),
	255 ** Number(!normalize),
];

/**
 * Convert RGB(A) string to its array representation
 * @param rgbStr - RGB(A) string
 * @return RGB(A) array
 */
export const rgbStrToRgbArray = (
	rgbStr: string,
): [number, number, number] | [number, number, number, number] =>
	(rgbStr
		.match(/[\d.]+/g)
		?.slice(0, 4)
		.map((x) => Number(x)) as [number, number, number, number]) ||
	([0, 0, 0, 0] as [number, number, number, number]);

/**
 * Same as `rgbStrToRgbArray()`
 */
export const rgbaStrToRgbaArray = rgbStrToRgbArray;

/**
 * Convert RGB string to its decimal representation
 * @param rgbStr - RGB string
 * @return Decimal representation
 */
export const rgbStrToDec = (rgbStr: string): number =>
	rgbStrToRgbArray(rgbStr)
		.slice(0, 3)
		// eslint-disable-next-line no-bitwise
		.map((x, i) => +x << (8 * (2 - i)))
		.reduce((x, sum) => sum + x, 0);

/**
 * Convert RGB values to a HEX string
 * @param r - Red component
 * @param g - Green component
 * @param b - Blue component
 * @return HEX string
 */
export const rgbToHex = (r: number, g: number, b: number): string => {
	const componentToHex = (c: number) => {
		const hex = c.toString(16);
		return hex.length === 1 ? `0${hex}` : hex;
	};
	return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
};

/**
 * Convert a color to an RGBA color
 * @param color - Color to be converted. Currently
 *   supports: HEX-String, HEX-Deximal, RGB, or RGBA.
 * @param normalizeColor - If `true` the returned RGBA values will be
 *   normalized to `[0,1]`.
 * @return Quadruple defining an RGBA color.
 */
export const toRgbaArray = (
	color: string | number | number[],
	normalizeColor?: boolean,
): [number, number, number, number] => {
	if (isArray(color) && isRgbaArray(color)) {
		return normalizeColor && !isNormFloatArray(color)
			? (normalize(color) as [number, number, number, number])
			: (color as [number, number, number, number]);
	}

	if (isArray(color) && isRgbArray(color)) {
		return [
			...(normalizeColor ? normalize(color) : color),
			255 ** Number(Boolean(normalizeColor)),
		] as [number, number, number, number];
	}

	if (isString(color) && isHex(color)) {
		return hexToRgbaArray(color as string, normalizeColor);
	}

	if (typeof color === "number" && Number.isInteger(color) && color >= 0) {
		const rgb = decToRgb(color);
		return normalizeColor
			? ([...normalize(rgb), 1] as [number, number, number, number])
			: ([...rgb, 255] as [number, number, number, number]);
	}

	console.warn(
		"Only HEX, RGB, and RGBA are handled by this function. Returning white instead.",
	);

	return normalizeColor ? [1, 1, 1, 1] : [255, 255, 255, 255];
};
