import { describe, test, expect } from "vitest";

import { clamp, isClose } from "../src/math";

describe("clamp()", () => {
	test("clamps values between min and max", () => {
		const a = Array(100)
			.fill(undefined)
			.map(() => Math.random() * 100);
		const min = 33;
		const max = 66;
		const clamped = a.map((v) => clamp(v, min, max));

		expect(clamped.every((v) => v >= min && v <= max)).toBe(true);
	});
});

describe("isClose()", () => {
	test("handles floating point precision", () => {
		const a = parseFloat(String((6760 / 100) * 100));
		const b = parseFloat(String(6760));

		expect(a !== b).toBe(true);
		expect(isClose(a, b)).toBe(true);
	});

	test("works with different precisions", () => {
		expect(isClose(1.4, 1.5, 0)).toBe(true);
		expect(isClose(1.4, 1.5, 2)).toBe(false);
		expect(isClose(1.0004, 1.0005, 3)).toBe(true);
		expect(isClose(1.0004, 1.0005, 5)).toBe(false);
	});
});
