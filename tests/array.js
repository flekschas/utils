/* eslint no-console: 1 */

import '@babel/polyfill';
import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { deepClone } from '../src/object';
import { array2dTranspose } from '../src/array';

test('array2dTranspose()', t => {
  const originalMatrix = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];
  const transposedMatrix = [
    [0, 5],
    [1, 6],
    [2, 7],
    [3, 8],
    [4, 9]
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
