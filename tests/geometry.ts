/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import {
  lPointDist,
  l1PointDist,
  l2PointDist,
  lRectDist,
  // isPointInPolygon,
  // isPointInRect,
  // isPointHalfwayInRect
} from '../src/geometry';

describe('Geometry utilities', () => {
  test('l1PointDist()', () => {
    expect(l1PointDist(0, 0, 0, 0)).toBe(0);
    expect(l1PointDist(0, 0, 1, 1)).toBe(2);
    expect(l1PointDist(0, 0, -1, -1)).toBe(2);
  });

  test('l2PointDist()', () => {
    expect(l2PointDist(0, 0, 0, 0)).toBe(0);
    expect(l2PointDist(0, 0, 1, 1)).toBe(Math.sqrt(2));
    expect(l2PointDist(0, 0, -1, -1)).toBe(Math.sqrt(2));
  });

  test('lPointDist()', () => {
    const x1 = Math.random();
    const y1 = Math.random();
    const x2 = Math.random();
    const y2 = Math.random();

    expect(lPointDist(1)(x1, y1, x2, y2)).toBe(l1PointDist(x1, y1, x2, y2));
    expect(lPointDist(2)(x1, y1, x2, y2)).toBe(l2PointDist(x1, y1, x2, y2));
  });

  test('lRectDist()', () => {
    const topLeft = { minX: 0, minY: 0, maxX: 1, maxY: 1 };
    const topMiddle = { minX: 2.5, minY: 0, maxX: 3.5, maxY: 1 };
    const topRight = { minX: 5, minY: 0, maxX: 6, maxY: 1 };
    const left = { minX: 0, minY: 2.5, maxX: 1, maxY: 3.5 };
    const right = { minX: 5, minY: 2.5, maxX: 6, maxY: 3.5 };
    const bottomLeft = { minX: 0, minY: 5, maxX: 1, maxY: 6 };
    const bottomMiddle = { minX: 2.5, minY: 5, maxX: 3.5, maxY: 6 };
    const bottomRight = { minX: 5, minY: 5, maxX: 6, maxY: 6 };

    const center = { minX: 2, minY: 2, maxX: 4, maxY: 4 };

    const inside = { minX: 2.5, minY: 2.5, maxX: 3.5, maxY: 3.5 };
    const overlapping = { minX: 1, minY: 1, maxX: 3, maxY: 3 };
    const touching = { minX: 0, minY: 0, maxX: 2, maxY: 2 };

    const l2RectDist = lRectDist(2);
    const l1RectDist = lRectDist(1);
    const sqrt2 = Math.sqrt(2);

    const l2Dsqrt2 = [
      [topLeft, center],
      [topRight, center],
      [bottomLeft, center],
      [bottomRight, center],
    ];

    l2Dsqrt2.forEach(([a, b]) => {
      expect(l2RectDist(a, b)).toBe(sqrt2);
      expect(l2RectDist(b, a)).toBe(sqrt2);
      expect(l1RectDist(a, b)).toBe(2);
      expect(l1RectDist(b, a)).toBe(2);
    });

    const l2D1 = [
      [topMiddle, center],
      [left, center],
      [right, center],
      [bottomMiddle, center],
    ];

    l2D1.forEach(([a, b]) => {
      expect(l2RectDist(a, b)).toBe(1);
      expect(l2RectDist(b, a)).toBe(1);
      expect(l1RectDist(a, b)).toBe(1);
      expect(l1RectDist(b, a)).toBe(1);
    });

    const l2D0 = [
      [inside, center],
      [overlapping, center],
      [touching, center],
    ];

    l2D0.forEach(([a, b]) => {
      expect(l2RectDist(a, b)).toBe(0);
      expect(l2RectDist(b, a)).toBe(0);
      expect(l1RectDist(a, b)).toBe(0);
      expect(l1RectDist(b, a)).toBe(0);
    });
  });
});
