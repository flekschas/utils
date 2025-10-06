import { describe, test, expect } from "vitest";

import { deepClone } from "../src/object";
import {
	array2dTranspose,
	clearArray,
	hasSameElements,
	unique,
} from "../src/array";

describe("array2dTranspose()", () => {
	test("transposes a 2D array correctly", () => {
		const originalMatrix = [
			[0, 1, 2, 3, 4],
			[5, 6, 7, 8, 9],
		];
		const transposedMatrix = [
			[0, 5],
			[1, 6],
			[2, 7],
			[3, 8],
			[4, 9],
		];

		const originalMatrixTest = deepClone(originalMatrix);
		const transposedMatrixTest = array2dTranspose(originalMatrix);

		expect(originalMatrix).toEqual(originalMatrixTest);
		expect(transposedMatrixTest).toEqual(transposedMatrix);
		expect(originalMatrixTest).not.toEqual(transposedMatrixTest);
	});
});

describe("clearArray()", () => {
	test("clears array in place and returns same reference", () => {
		const a = [0, 1, 2, 3, 4];

		expect(a.length).toBe(5);

		const b = clearArray(a);

		expect(a.length).toBe(0);
		expect(a).toBe(b);
	});
});

describe("hasSameElements()", () => {
	test("returns true for same array reference", () => {
		const a = [0, 1, 2, 3, 4];
		expect(hasSameElements(a, a)).toBe(true);
	});

	test("returns true for identical arrays with different references", () => {
		const a = [0, 1, 2, 3, 4];
		expect(hasSameElements(a, [...a])).toBe(true);
	});

	test("returns true for array and its reverse", () => {
		const a = [0, 1, 2, 3, 4];
		expect(hasSameElements(a, [...a].reverse())).toBe(true);
	});

	test("returns false for arrays of different length", () => {
		const a = [0, 1, 2, 3, 4];
		expect(hasSameElements(a, [])).toBe(false);
	});

	test("returns false for arrays with same length but different elements", () => {
		const a = [0, 1, 2, 3, 4];
		expect(hasSameElements(a, [1, 1, 2, 3, 4])).toBe(false);
	});
});

describe("unique()", () => {
	test("returns only unique values", () => {
		const a = [0, 1, 1, 1, 2, 3, 10, -1, 2];
		const u = [0, 1, 2, 3, 10, -1];
		expect(unique(a)).toEqual(u);
	});

	test("supports custom getter", () => {
		const a = [
			{ v: 0 },
			{ v: 1 },
			{ v: 1 },
			{ v: 1 },
			{ v: 2 },
			{ v: 3 },
			{ v: 10 },
			{ v: -1 },
			{ v: 2 },
		];
		const u = [0, 1, 2, 3, 10, -1];
		expect(unique(a, (x) => x.v)).toEqual(u);
	});

	test("works with object references", () => {
		const x = {};
		const y = {};
		const z = {};
		const a = [x, y, z, x, y, z];
		const u = [x, y, z];
		expect(unique(a)).toEqual(u);
	});
});
