/* eslint no-console: 1 */

import '@babel/polyfill';
import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

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
  meanVector,
  median,
  medianVector,
  min,
  minVector,
  sumVector
} from '../src/vector';

test('aggregate()', t => {
  let v = [0, 1, 19, -2, 99, 99];
  let expected = -2;
  let observed = aggregate(v, Math.min, Infinity);

  t.ok(deepEqual(expected, observed), 'Get the minimum');

  v = [0, 1, 19, -2, 99, 99];
  expected = [-2, 99];
  observed = aggregate(v, [Math.min, Math.max], [Infinity, -Infinity]);

  t.ok(deepEqual(expected, observed), 'Get the minimum and maximum');

  v = [{ v: 0 }, { v: 1 }, { v: 99 }];
  expected = [0, 99];
  observed = aggregate(v, [Math.min, Math.max], [Infinity, -Infinity], {
    getter: x => x.v
  });

  t.ok(deepEqual(expected, observed), 'Support custom getter');
});

test('diff()', t => {
  const v = [0, 1, 2, 3, 4];
  const w = [5, 6, 7, 8, 9];

  const d = diff(v, w);

  t.ok(
    d.every(x => x === -5),
    'The diff vector should always be -5'
  );
});

test('l1Dist()', t => {
  t.equal(
    l1Dist([0, 0], [0, 0]),
    0,
    'The l1 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l1Dist([0, 0, 0], [1, 1, 1]),
    3,
    'The l1 distance between [0,0,0] and [1,1,1] should be 3'
  );
  t.equal(
    l1Dist([0, 0, 1, 1], [-1, -1, -1, -1]),
    6,
    'The l1 distance between [0,0,1,1] and [-1,-1,-1,-1] should be 6'
  );
});

test('l1DistByDim()', t => {
  t.equal(
    l1DistByDim(2)([0, 0], [0, 0]),
    0,
    'The l1 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l1DistByDim(3)([0, 0, 0], [1, 1, 1]),
    3,
    'The l1 distance between [0,0,0] and [1,1,1] should be 3'
  );
  t.equal(
    l1DistByDim(4)([0, 0, 1, 1], [-1, -1, -1, -1]),
    6,
    'The l1 distance between [0,0,1,1] and [-1,-1,-1,-1] should be 6'
  );
});

test('l2Dist()', t => {
  t.equal(
    l2Dist([0, 0], [0, 0]),
    0,
    'The l2 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l2Dist([0, 0, 0], [1, 1, 1]),
    Math.sqrt(3),
    'The l2 distance between [0,0,0] and [1,1,1] should be Math.sqrt(3)'
  );
  t.equal(
    l2Dist([0, 0, 1, 1], [-1, -1, -1, -1]),
    Math.sqrt(10),
    'The l2 distance between [0,0,1,1] and [-1,-1,-1,-1] should be Math.sqrt(10)'
  );
});

test('l2DistByDim()', t => {
  t.equal(
    l2DistByDim(2)([0, 0], [0, 0]),
    0,
    'The l2 distance between [0,0] and [0,0] should be 0'
  );
  t.equal(
    l2DistByDim(3)([0, 0, 0], [1, 1, 1]),
    Math.sqrt(3),
    'The l2 distance between [0,0,0] and [1,1,1] should be Math.sqrt(3)'
  );
  t.equal(
    l2DistByDim(4)([0, 0, 1, 1], [-1, -1, -1, -1]),
    Math.sqrt(10),
    'The l2 distance between [0,0,1,1] and [-1,-1,-1,-1] should be Math.sqrt(10)'
  );
});

test('lDist()', t => {
  let v = [Math.random(), Math.random()];
  let w = [Math.random(), Math.random()];

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

  v = [Math.random(), Math.random(), Math.random()];
  w = [Math.random(), Math.random(), Math.random()];

  t.equal(
    lDist(1, 3)(v, w),
    l1DistByDim(3)(v, w),
    'The l(1, 3) and l1DistByDim(3) distance should be identical'
  );

  t.equal(
    lDist(2, 3)(v, w),
    l2DistByDim(3)(v, w),
    'The l(2, 3) and l2DistByDim(3) distance should be identical'
  );
});

test('max()', t => {
  let v = [0, 1, 2, 3, 4];

  let maxValue = max(v);

  t.ok(deepEqual(maxValue, v[4]), `The max value should be ${v[4]}`);

  v = [0, Number.NaN, 2, 3, 4, 3, Number.NaN];

  maxValue = max(v);

  t.ok(
    deepEqual(maxValue, v[4]),
    `The max value should be ${v[4]} even if the vector contains NaN`
  );
});

test('maxVector()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const maxCol = maxVector(m);

  t.ok(deepEqual(maxCol, m[1]), `The vector max should be ${m[1]}`);

  t.ok(deepEqual(maxVector([m[0]]), m[0]), `The vector max should be ${m[0]}`);

  t.ok(
    deepEqual(maxVector([]), []),
    `The vector max of an empty array should be an empty array`
  );
});

test('meanVector()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const meanCol = meanVector(m);
  const expectedMeanCol = [2.5, 3.5, 4.5, 5.5, 6.5];

  t.ok(
    deepEqual(meanCol, expectedMeanCol),
    `The vector mean should be ${expectedMeanCol}`
  );

  t.ok(
    deepEqual(meanVector([m[0]]), m[0]),
    `The vector mean should be ${m[0]}`
  );

  t.ok(
    deepEqual(meanVector([]), []),
    `The vector mean of an empty array should be an empty array`
  );
});

test('median()', t => {
  t.equal(median([0, 1, 2, 3, 4]), 2, 'The median should be 2');
  t.equal(median([0, 1, 2, 3, 4, 5]), 3, 'The median should be 3');
  t.equal(median([2]), 2, 'The median should be 2');
  t.equal(median([]), undefined, 'The median should be undefined');
});

test('medianVector()', t => {
  t.equal(
    medianVector([
      [0, 1],
      [2, 1],
      [3, 1]
    ]),
    [2, 1],
    'The median should be [2]'
  );
  t.equal(
    medianVector([
      [0, 1],
      [2, 1],
      [3, 1],
      [4, 1]
    ]),
    [3, 1],
    'The median should be [2]'
  );
  t.equal(medianVector([[2, 1]]), [2, 1], 'The median should be [2]');
  t.equal(medianVector([]), undefined, 'The median should be undefined');
});

test('min()', t => {
  let v = [4, 1, 2, 3, 0];

  let maxValue = min(v);

  t.ok(deepEqual(maxValue, v[4]), `The max value should be ${v[4]}`);

  v = [4, Number.NaN, 2, 3, 0, 3, Number.NaN];

  maxValue = min(v);

  t.ok(
    deepEqual(maxValue, v[4]),
    `The max value should be ${v[4]} even if the vector contains NaN`
  );
});

test('minVector()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const minCol = minVector(m);

  t.ok(deepEqual(minCol, m[0]), `The vector min should be ${m[0]}`);

  t.ok(deepEqual(maxVector([m[1]]), m[1]), `The vector min should be ${m[1]}`);

  t.ok(
    deepEqual(minVector([]), []),
    `The vector min of an empty array should be an empty array`
  );
});

test('sumVector()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const sum = sumVector(m);
  const expected = [5, 7, 9, 11, 13];

  t.ok(deepEqual(sum, expected), `The vector sum should be ${expected}`);

  t.ok(deepEqual(maxVector([m[1]]), m[1]), `The vector sum should be ${m[1]}`);

  t.ok(
    deepEqual(sumVector([]), []),
    `The vector sum of an empty array should be an empty array`
  );
});
