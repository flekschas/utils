import { identity } from "./math";

/**
 * Transpose a nested 2D array
 * @param matrix - The matrix-liked 2D nested array to be transposed
 * @return The transposed 2D nested matrix-like array
 */
export const array2dTranspose = <T = unknown>(matrix: T[][]) => {
	// Create a nested 2D array with transposed shape
	const out: T[][] = [...Array.from({ length: matrix[0].length }, () => [])];

	// Fill the transposed array
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			out[j][i] = matrix[i][j];
		}
	}

	return out;
};

/**
 * Clear an array without while keeping it's reference
 * @param a - Array to be cleared
 * @return The array itself
 */
export const clearArray = <T>(a: T[]) => {
	a.splice(0, a.length);
	return a;
};

/**
 * Check if two arrays contain the same elements
 * @param a - First array
 * @param b - Second array
 * @return If `true` the two arrays contain the same elements
 */
export const hasSameElements = <T>(a: T[], b: T[]): boolean => {
	if (a === b) {
		return true;
	}
	if (a.length !== b.length) {
		return false;
	}
	const aSet = new Set(a);
	const bSet = new Set(b);
	// Since the arrays could contain duplicates, we have to check the set length
	// as well
	if (aSet.size !== bSet.size) {
		return false;
	}
	return b.every((element) => aSet.has(element));
};

/**
 * Return unique values of an array
 * @param a - Input array
 * @return Array with unique values
 */
export const unique = <T>(a: T[], getter: (v: T) => T = identity): T[] => {
	const s = new Set();
	const out: T[] = [];

	for (const item of a) {
		const v = getter(item);
		if (!s.has(v)) {
			s.add(v);
			out.push(v);
		}
	}

	return out;
};
