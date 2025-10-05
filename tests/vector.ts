/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import {
  aggregate,
  diff,
  lDist,
  l1Dist,
  l1DistByDim,
  l2Dist,
  l2DistByDim,
  max,
  maxVector,
  mean,
  meanNan,
  meanVector,
  median,
  medianVector,
  min,
  minVector,
  sum,
  sumVector,
  unionIntegers,
  range,
  rangeMap,
} from '../src/vector';

describe('Vector utilities', () => {
  describe('aggregate()', () => {
    test('gets the minimum', () => {
      let v = [0, 1, 19, -2, 99, 99];
      let expected = -2;
      let observed = aggregate(v, Math.min, Infinity);

      expect(observed).toEqual(expected);
    });

    test('gets the minimum and maximum', () => {
      const v = [0, 1, 19, -2, 99, 99];
      const expected = [-2, 99];
      const observed = aggregate(v, [Math.min, Math.max], [Infinity, -Infinity]);

      expect(observed).toEqual(expected);
    });

    test('supports custom getter', () => {
      const v = [{ v: 0 }, { v: 1 }, { v: 99 }];
      const expected = [0, 99];
      const observed = aggregate(v, [Math.min, Math.max], [Infinity, -Infinity], {
        getter: (x) => x.v,
      });

      expect(observed).toEqual(expected);
    });
  });

  test('diff()', () => {
    const v = [0, 1, 2, 3, 4];
    const w = [5, 6, 7, 8, 9];

    const d = diff(v, w);

    expect(d.every((x) => x === -5)).toBe(true);
  });

  test('l1Dist()', () => {
    expect(l1Dist([0, 0], [0, 0])).toBe(0);
    expect(l1Dist([0, 0, 0], [1, 1, 1])).toBe(3);
    expect(l1Dist([0, 0, 1, 1], [-1, -1, -1, -1])).toBe(6);
  });

  test('l1DistByDim()', () => {
    expect(l1DistByDim(2)([0, 0], [0, 0])).toBe(0);
    expect(l1DistByDim(3)([0, 0, 0], [1, 1, 1])).toBe(3);
    expect(l1DistByDim(4)([0, 0, 1, 1], [-1, -1, -1, -1])).toBe(6);
  });

  test('l2Dist()', () => {
    expect(l2Dist([0, 0], [0, 0])).toBe(0);
    expect(l2Dist([0, 0, 0], [1, 1, 1])).toBe(Math.sqrt(3));
    expect(l2Dist([0, 0, 1, 1], [-1, -1, -1, -1])).toBe(Math.sqrt(10));
  });

  test('l2DistByDim()', () => {
    expect(l2DistByDim(2)([0, 0], [0, 0])).toBe(0);
    expect(l2DistByDim(3)([0, 0, 0], [1, 1, 1])).toBe(Math.sqrt(3));
    expect(l2DistByDim(4)([0, 0, 1, 1], [-1, -1, -1, -1])).toBe(Math.sqrt(10));
  });

  test('lDist()', () => {
    let v = [Math.random(), Math.random()];
    let w = [Math.random(), Math.random()];

    expect(lDist(1)(v, w)).toBe(l1Dist(v, w));
    expect(lDist(2)(v, w)).toBe(l2Dist(v, w));

    v = [Math.random(), Math.random(), Math.random()];
    w = [Math.random(), Math.random(), Math.random()];

    expect(lDist(1, 3)(v, w)).toBe(l1DistByDim(3)(v, w));
    expect(lDist(2, 3)(v, w)).toBe(l2DistByDim(3)(v, w));
  });

  describe('max()', () => {
    test('finds max value', () => {
      let v = [0, 1, 2, 3, 4];
      let maxValue = max(v);

      expect(maxValue).toEqual(v[4]);
    });

    test('finds max value with NaN', () => {
      const v = [0, Number.NaN, 2, 3, 4, 3, Number.NaN];
      const maxValue = max(v);

      expect(maxValue).toEqual(v[4]);
    });
  });

  test('maxVector()', () => {
    const m = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    const maxCol = maxVector(m);

    expect(maxCol).toEqual(m[1]);
    expect(maxVector([m[0]])).toEqual(m[0]);
    expect(maxVector([])).toEqual([]);
  });

  describe('mean()', () => {
    test('calculates mean', () => {
      let v = [0, 1, 2, 3, 4];

      expect(mean(v)).toBe(v[2]);
    });

    test('calculates mean with NaN', () => {
      const v = [
        0,
        1,
        2,
        3,
        4,
        Number.NaN,
        Number.NaN,
        Number.NaN,
        Number.NaN,
        Number.NaN,
      ];

      expect(mean(v)).toBe(v[2] / 2);
    });
  });

  describe('meanNan()', () => {
    test('returns NaN for empty array', () => {
      let v = [];

      expect(Number.isNaN(meanNan(v))).toBe(true);
    });

    test('calculates mean', () => {
      const v = [0, 1, 2, 3, 4];

      expect(meanNan(v)).toBe(v[2]);
    });

    test('ignores NaN values', () => {
      const v = [0, 1, 2, Number.NaN, 3, 4, Number.NaN];

      expect(meanNan(v)).toBe(v[2]);
    });
  });

  test('meanVector()', () => {
    const m = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    const meanCol = meanVector(m);
    const expectedMeanCol = [2.5, 3.5, 4.5, 5.5, 6.5];

    expect(meanCol).toEqual(expectedMeanCol);
    expect(meanVector([m[0]])).toEqual(m[0]);
    expect(meanVector([])).toEqual([]);
  });

  test('median()', () => {
    expect(median([0, 1, 2, 3, 4])).toBe(2);
    expect(median([0, 1, 2, 3, 4, 5])).toBe(3);
    expect(median([2])).toBe(2);
    expect(median([])).toBe(undefined);
  });

  test('medianVector()', () => {
    expect(medianVector([
      [0, 1],
      [2, 1],
      [3, 1],
    ])).toEqual([2, 1]);
    expect(medianVector([
      [0, 1],
      [2, 1],
      [3, 1],
      [4, 1],
    ])).toEqual([3, 1]);
    expect(medianVector([[2, 1]])).toEqual([2, 1]);
    expect(medianVector([])).toBe(undefined);
  });

  describe('min()', () => {
    test('finds min value', () => {
      let v = [4, 1, 2, 3, 0];
      let maxValue = min(v);

      expect(maxValue).toEqual(v[4]);
    });

    test('finds min value with NaN', () => {
      const v = [4, Number.NaN, 2, 3, 0, 3, Number.NaN];
      const maxValue = min(v);

      expect(maxValue).toEqual(v[4]);
    });
  });

  test('minVector()', () => {
    const m = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    const minCol = minVector(m);

    expect(minCol).toEqual(m[0]);
    expect(maxVector([m[1]])).toEqual(m[1]);
    expect(minVector([])).toEqual([]);
  });

  describe('sum()', () => {
    test('sums empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('sums array', () => {
      expect(sum([0, 1, 2, 3, 4])).toBe(10);
    });

    test('sums array with NaN', () => {
      expect(sum([0, 1, 2, 3, Number.NaN, 4])).toBe(10);
    });
  });

  test('sumVector()', () => {
    const m = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
    ];

    const sumCol = sumVector(m);
    const expected = [5, 7, 9, 11, 13];

    expect(sumCol).toEqual(expected);
    expect(maxVector([m[1]])).toEqual(m[1]);
    expect(sumVector([])).toEqual([]);
  });

  test('unionIntegers()', () => {
    const v = [0, 1, 2, 3, 4];
    const w = [1, 1, 10, 9];

    const union = unionIntegers(v, w);
    const expected = [0, 1, 2, 3, 4, 9, 10];

    expect(union).toEqual(expected);
  });

  describe('range()', () => {
    test('basic range array', () => {
      expect(range(0, 4)).toEqual([0, 1, 2, 3]);
    });

    test('shorthand range array', () => {
      expect(range(4)).toEqual([0, 1, 2, 3]);
    });

    test('negative ranges', () => {
      expect(range(-2, 2)).toEqual([-2, -1, 0, 1]);
    });

    test('inverse ranges', () => {
      expect(range(2, -2)).toEqual([2, 1, 0, -1]);
    });

    test('range with custom step size', () => {
      expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
    });

    test('range with decimal step size', () => {
      expect(range(0, 2, 0.5)).toEqual([0, 0.5, 1.0, 1.5]);
    });

    test('range with non-divisible step size', () => {
      expect(range(0, 10, 3)).toEqual([0, 3, 6, 9]);
    });
  });

  describe('rangeMap()', () => {
    test('defaults to range() without mapping function', () => {
      expect(rangeMap(4)).toEqual([0, 1, 2, 3]);
    });

    test('supports initial mapping', () => {
      expect(rangeMap(4, (i, l) => i / l)).toEqual([0 / 4, 1 / 4, 2 / 4, 3 / 4]);
    });
  });
});
