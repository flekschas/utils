import { describe, test, expect } from "vitest";

import { iteratorToArray } from "../src/conversion";

describe("iteratorToArray()", () => {
	test("converts iterator to array", () => {
		const result = iteratorToArray(new Set([1, 2, 3]));
		expect(Array.isArray(result)).toBe(true);
		expect(result).toEqual([1, 2, 3]);
	});
});
