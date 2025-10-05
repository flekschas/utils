import { describe, test, expect } from "vitest";

import { nthIndexOf, randomString } from "../src/string";

describe("nthIndexOf()", () => {
	test("finds first occurrence", () => {
		expect(nthIndexOf("ananas", "a", 0)).toBe("ananas".indexOf("a"));
	});

	test("finds second occurrence", () => {
		expect(nthIndexOf("ananas", "a", 1)).toBe(
			"ananas".indexOf("a", "ananas".indexOf("a") + 1),
		);
	});

	test("finds third occurrence", () => {
		expect(nthIndexOf("ananas", "a", 2)).toBe(4);
	});

	test("returns -1 when occurrence not found", () => {
		expect(nthIndexOf("ananas", "a", 3)).toBe(-1);
	});
});

describe("randomString()", () => {
	test("generates string of specified length", () => {
		expect(randomString(6).length).toBe(6);
	});

	test("generates string from custom alphabet", () => {
		const result = randomString(6, "0123456789");
		expect(/[0-9]/.test(result)).toBe(true);
	});
});
