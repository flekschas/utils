import { describe, test, expect } from "vitest";

import { camelToConst, capitalize } from "../src/casing";

describe("camelToConst()", () => {
	test("transforms camelCase to CONST_CASE", () => {
		expect(camelToConst("ananasBananas")).toBe("ANANAS_BANANAS");
	});

	test("transforms lowercase to UPPERCASE", () => {
		expect(camelToConst("ananasbananas")).toBe("ANANASBANANAS");
	});
});

describe("capitalize()", () => {
	test("capitalizes first letter", () => {
		expect(capitalize("my fancyCase mega_string")).toBe(
			"My fancyCase mega_string",
		);
	});
});
