/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import {
  lPointDist,
  l1PointDist,
  l2PointDist,
  lRectDist
  // isPointInPolygon,
  // isPointInRect,
  // isPointHalfwayInRect
} from '../src/geometry';

test('l1PointDist()', t => {
  t.equal(
    l1PointDist(0, 0, 0, 0),
    0,
    'The l1 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l1PointDist(0, 0, 1, 1),
    2,
    'The l1 distance between [0,0] and [1,1] should be 2'
  );
  t.equal(
    l1PointDist(0, 0, -1, -1),
    2,
    'The l1 distance between [0,0] and [1,1] should be 2'
  );
});

test('l2PointDist()', t => {
  t.equal(
    l2PointDist(0, 0, 0, 0),
    0,
    'The l2 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l2PointDist(0, 0, 1, 1),
    Math.sqrt(2),
    'The l2 distance between [0,0] and [1,1] should be ~1.41'
  );
  t.equal(
    l2PointDist(0, 0, -1, -1),
    Math.sqrt(2),
    'The l2 distance between [0,0] and [1,1] should be ~1.41'
  );
});

test('lPointDist()', t => {
  const x1 = Math.random();
  const y1 = Math.random();
  const x2 = Math.random();
  const y2 = Math.random();

  t.equal(
    lPointDist(1)(x1, y1, x2, y2),
    l1PointDist(x1, y1, x2, y2),
    'The l(1) and l1 distance should be identical'
  );

  t.equal(
    lPointDist(2)(x1, y1, x2, y2),
    l2PointDist(x1, y1, x2, y2),
    'The l(2) and l2 distance should be identical'
  );
});

test('lRectDist()', t => {
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
    [bottomRight, center]
  ];

  l2Dsqrt2.forEach(([a, b]) => {
    t.equal(l2RectDist(a, b), sqrt2, 'The l2RectDist(a,b) is ~1.41');
    t.equal(l2RectDist(b, a), sqrt2, 'The l2RectDist(b,a) is ~1.41');
    t.equal(l1RectDist(a, b), 2, 'The l1RectDist(a,b) is 2');
    t.equal(l1RectDist(b, a), 2, 'The l1RectDist(b,a) is 2');
  });

  const l2D1 = [
    [topMiddle, center],
    [left, center],
    [right, center],
    [bottomMiddle, center]
  ];

  l2D1.forEach(([a, b]) => {
    t.equal(l2RectDist(a, b), 1, 'The l2RectDist(a,b) is 1');
    t.equal(l2RectDist(b, a), 1, 'The l2RectDist(b,a) is 1');
    t.equal(l1RectDist(a, b), 1, 'The l1RectDist(a,b) is 1');
    t.equal(l1RectDist(b, a), 1, 'The l1RectDist(b,a) is 1');
  });

  const l2D0 = [
    [inside, center],
    [overlapping, center],
    [touching, center]
  ];

  l2D0.forEach(([a, b]) => {
    t.equal(l2RectDist(a, b), 0, 'The l2RectDist(a,b) is 0');
    t.equal(l2RectDist(b, a), 0, 'The l2RectDist(b,a) is 0');
    t.equal(l1RectDist(a, b), 0, 'The l1RectDist(a,b) is 0');
    t.equal(l1RectDist(b, a), 0, 'The l1RectDist(b,a) is 0');
  });
});
