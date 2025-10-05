/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import { sortDesc, argSort, sortPos } from '../src/sorting';

describe('Sorting utilities', () => {
  describe('argSort()', () => {
    test('sorts indices ascending', () => {
      let input = [9, 5, 11, -1, 0];
      let sorted = [-1, 0, 5, 9, 11];

      let sortedIdx = argSort(input);

      expect(sortedIdx.map((idx) => input[idx])).toEqual(sorted);
    });

    test('sorts indices descending', () => {
      const input = [9, 5, 11, -1, 0];
      const sortedIdx = argSort(input, { comparator: sortDesc });
      const sorted = [11, 9, 5, 0, -1];

      expect(sortedIdx.map((idx) => input[idx])).toEqual(sorted);
    });

    test('ignores null values', () => {
      const input = [9, null, 11, -1, 0];
      const sortedIdx = argSort(input, { ignoreNull: true });
      const sorted = [-1, 0, 9, 11];

      expect(sortedIdx.map((idx) => input[idx])).toEqual(sorted);
    });

    test('supports custom getter', () => {
      const input = [[9], [5], [11], [-1], [0]];
      const sortedIdx = argSort(input, { getter: (x) => x[0] });
      const sorted = [[-1], [0], [5], [9], [11]];

      expect(sortedIdx.map((idx) => input[idx])).toEqual(sorted);
    });
  });

  describe('sortPos(array)', () => {
    test('sorts positions ascending', () => {
      let input = [9, 5, 11, -1, 0];
      let sorted = [-1, 0, 5, 9, 11];

      let sortedPos = sortPos(input);

      expect(sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])).toEqual(sorted);
    });

    test('sorts positions descending', () => {
      const input = [9, 5, 11, -1, 0];
      const sortedPos = sortPos(input, { comparator: sortDesc });
      const sorted = [11, 9, 5, 0, -1];

      expect(sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])).toEqual(sorted);
    });

    test('ignores null values', () => {
      const input = [9, null, 11, -1, 0];
      const sortedPos = sortPos(input, { ignoreNull: true });
      const sorted = [-1, 0, 9, 11];

      expect(sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])).toEqual(sorted);
    });

    test('supports custom getter', () => {
      const input = [[9], [5], [11], [-1], [0]];
      const sortedPos = sortPos(input, { getter: (x) => x[0] });
      const sorted = [[-1], [0], [5], [9], [11]];

      expect(sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])).toEqual(sorted);
    });
  });

  describe('sortPos(object)', () => {
    const sortKeys = (sortPositions) =>
      Object.entries(sortPositions).reduce((out, [key, sortPosition]) => {
        out[sortPosition] = key;
        return out;
      }, []);

    test('sorts object positions ascending', () => {
      let input = { 1: 9, 100: 5, 0: 11, test: -1, 999: 0 };
      let sorted = ['test', '999', '100', '1', '0'];

      let sortedPos = sortPos(input);

      expect(sortKeys(sortedPos)).toEqual(sorted);
    });

    test('sorts object positions descending', () => {
      const input = { 1: 9, 100: 5, 0: 11, test: -1, 999: 0 };
      const sortedPos = sortPos(input, { comparator: sortDesc });
      const sorted = ['0', '1', '100', '999', 'test'];

      expect(sortKeys(sortedPos)).toEqual(sorted);
    });

    test('ignores null values in object', () => {
      const input = { 1: 9, 100: null, 0: 11, test: -1, 999: 0 };
      const sortedPos = sortPos(input, { ignoreNull: true });
      const sorted = ['test', '999', '1', '0'];

      expect(sortKeys(sortedPos)).toEqual(sorted);
    });

    test('supports custom getter for object', () => {
      const input = {
        1: { v: 9 },
        100: { v: 5 },
        0: { v: 11 },
        test: { v: -1 },
        999: { v: 0 },
      };
      const sortedPos = sortPos(input, { getter: (x) => x.v });
      const sorted = ['test', '999', '100', '1', '0'];

      expect(sortKeys(sortedPos)).toEqual(sorted);
    });
  });
});
