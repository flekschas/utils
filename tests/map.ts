import { describe, test, expect } from "vitest";

import { mergeMaps } from "../src/map";

describe("mergeMaps()", () => {
	test("merges two non-overlapping maps", () => {
		const result = mergeMaps(
			new Map([
				[1, "1"],
				[2, "2"],
			]),
			new Map([
				[3, "3"],
				[4, "4"],
			]),
		);
		expect(result).toEqual(
			new Map([
				[1, "1"],
				[2, "2"],
				[3, "3"],
				[4, "4"],
			]),
		);
	});

	test("merges two partially-overlapping maps", () => {
		const result = mergeMaps(
			new Map([
				[1, "1"],
				[2, "2"],
			]),
			new Map([
				[2, "2"],
				[3, "3"],
			]),
		);
		expect(result).toEqual(
			new Map([
				[1, "1"],
				[2, "2"],
				[3, "3"],
			]),
		);
	});
});
