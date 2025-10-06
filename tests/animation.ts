import { describe, test, expect } from "vitest";

import {
	cubicInOut,
	interpolateNumber,
	interpolateVector,
} from "../src/animation";

describe("cubicInOut()", () => {
	test("eases initial time to 0", () => {
		expect(cubicInOut(0)).toBe(0);
	});

	test("eases end time to 1", () => {
		expect(cubicInOut(1)).toBe(1);
	});

	test("eases half time to 0.5", () => {
		expect(cubicInOut(0.5)).toBe(0.5);
	});

	test("eases quarter time to 0.0625", () => {
		expect(cubicInOut(0.25)).toBe(0.0625);
	});

	test("eases three-quarter time to 0.9375", () => {
		expect(cubicInOut(0.75)).toBe(0.9375);
	});
});

describe("interpolateNumber()", () => {
	test("interpolates between two numbers", () => {
		const a = 0;
		const b = 1;

		expect(interpolateNumber(a, b, 0)).toBe(a);
		expect(interpolateNumber(a, b, 1)).toBe(b);
		expect(interpolateNumber(a, b, -1)).toBe(a);
		expect(interpolateNumber(a, b, 2)).toBe(b);
		expect(interpolateNumber(a, b, 0.5)).toBe(a + (b - a) / 2);
	});
});

describe("interpolateVector()", () => {
	test("interpolates between two vectors", () => {
		const a = [0, 1];
		const b = [1, 2];

		expect(interpolateVector(a, b, 0)).toEqual(a);
		expect(interpolateVector(a, b, 1)).toEqual(b);
		expect(interpolateVector(a, b, -1)).toEqual(a);
		expect(interpolateVector(a, b, 2)).toEqual(b);
		expect(interpolateVector(a, b, 0.5)).toEqual([0.5, 1.5]);
	});
});
