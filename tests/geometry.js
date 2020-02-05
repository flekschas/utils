/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import {
  lPointDist,
  l1PointDist,
  l2PointDist
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
    'The l2 distance between [0,0] and [1,1] should be Math.sqrt(2)'
  );
  t.equal(
    l2PointDist(0, 0, -1, -1),
    Math.sqrt(2),
    'The l2 distance between [0,0] and [1,1] should be Math.sqrt(2)'
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
