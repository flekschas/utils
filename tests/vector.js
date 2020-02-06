/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { lDist, l1Dist, l2Dist } from '../src/vector';

test('l1Dist()', t => {
  t.equal(
    l1Dist([0, 0], [0, 0]),
    0,
    'The l1 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l1Dist([0, 0], [1, 1]),
    2,
    'The l1 distance between [0,0] and [1,1] should be 2'
  );
  t.equal(
    l1Dist([0, 0], [-1, -1]),
    2,
    'The l1 distance between [0,0] and [1,1] should be 2'
  );
});

test('l2Dist()', t => {
  t.equal(
    l2Dist([0, 0], [0, 0]),
    0,
    'The l2 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l2Dist([0, 0], [1, 1]),
    Math.sqrt(2),
    'The l2 distance between [0,0] and [1,1] should be Math.sqrt(2)'
  );
  t.equal(
    l2Dist([0, 0], [-1, -1]),
    Math.sqrt(2),
    'The l2 distance between [0,0] and [1,1] should be Math.sqrt(2)'
  );
});

test('lDist()', t => {
  const v = [Math.random(), Math.random()];
  const w = [Math.random(), Math.random()];

  t.equal(
    lDist(1)(v, w),
    l1Dist(v, w),
    'The l(1) and l1 distance should be identical'
  );

  t.equal(
    lDist(2)(v, w),
    l2Dist(v, w),
    'The l(2) and l2 distance should be identical'
  );
});