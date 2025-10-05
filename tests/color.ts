import { describe, test, expect } from "vitest";

import { decToRgb } from "../src/color";

describe("decToRgb()", () => {
	test("converts black", () => {
		expect(decToRgb(0x000000)).toEqual([0, 0, 0]);
	});

	test("converts dark purple", () => {
		expect(decToRgb(0x110121)).toEqual([17, 1, 33]);
	});

	test("converts blue", () => {
		expect(decToRgb(0x0088ff)).toEqual([0, 136, 255]);
	});

	test("converts beige", () => {
		expect(decToRgb(0xfff1de)).toEqual([255, 241, 222]);
	});

	test("converts white", () => {
		expect(decToRgb(0xffffff)).toEqual([255, 255, 255]);
	});
});
