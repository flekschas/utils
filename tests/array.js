/* eslint no-console: 1 */

import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { deepClone } from '../src/object';
import {
  array2dTranspose,
  clearArray,
  hasSameElements,
  unique,
} from '../src/array';

test('array2dTranspose()', (t) => {
  const originalMatrix = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
  ];
  const transposedMatrix = [
    [0, 5],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9],
  ];

  const originalMatrixTest = deepClone(originalMatrix);
  const transposedMatrixTest = array2dTranspose(originalMatrix);

  t.ok(
    deepEqual(originalMatrix, originalMatrixTest),
    'The original matrix should not have been modified'
  );

  t.ok(
    deepEqual(transposedMatrix, transposedMatrixTest),
    'The transposed matrix should be transposed correctly'
  );

  t.ok(
    !deepEqual(originalMatrixTest, transposedMatrixTest),
    'The original matrix should be equal the transposed matrix'
  );
});

test('clearArray()', (t) => {
  const a = [0, 1, 2, 3, 4];

  t.equal(a.length, 5, 'Array should have length 5');

  const b = clearArray(a);

  t.equal(a.length, 0, 'Array should have length 0');

  t.equal(a, b, 'Cleared array should have the same reference');
});

test('hasSameElements()', (t) => {
  const a = [0, 1, 2, 3, 4];

  t.equal(
    hasSameElements(a, a),
    true,
    'The very same array should be said to have the same elements'
  );

  t.equal(
    hasSameElements(a, [...a]),
    true,
    'Two identical arrays with different references should be said to have the same elements'
  );

  t.equal(
    hasSameElements(a, [...a].reverse()),
    true,
    'An array and its reverse counterpart should be said to have the same elements'
  );

  t.equal(
    hasSameElements(a, []),
    false,
    'Two arrays of different length should **not** be said to have the same elements'
  );

  t.equal(
    hasSameElements(a, [1, 1, 2, 3, 4]),
    false,
    'Two arrays with the length but different elements should **not** be said to have the same elements'
  );
});

test('unique()', (t) => {
  let a = [0, 1, 1, 1, 2, 3, 10, -1, 2];
  let u = [0, 1, 2, 3, 10, -1];

  t.ok(deepEqual(unique(a), u), 'Array should only contain unique values');

  a = [
    { v: 0 },
    { v: 1 },
    { v: 1 },
    { v: 1 },
    { v: 2 },
    { v: 3 },
    { v: 10 },
    { v: -1 },
    { v: 2 },
  ];

  t.ok(
    deepEqual(
      unique(a, (x) => x.v),
      u
    ),
    'Support custom getter'
  );

  const x = {};
  const y = {};
  const z = {};
  a = [x, y, z, x, y, z];
  u = [x, y, z];

  t.ok(deepEqual(unique(a), u), 'Support custom getter');
});
