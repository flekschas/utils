/* eslint no-console: 1 */

import '@babel/polyfill';
import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { matrixMeanRow, matrixMeanCol } from '../src/matrix';

test('matrixMeanRow()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const meanRow = matrixMeanRow(m);
  const expectedMeanRow = [m[0][2], m[1][2]];

  t.ok(
    deepEqual(meanRow, expectedMeanRow),
    `The row-wise mean should be ${expectedMeanRow}`
  );

  t.ok(
    deepEqual(matrixMeanCol([]), []),
    `The row-wise mean of an empty array should be an empty array`
  );
});

test('matrixMeanCol()', t => {
  const m = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9]
  ];

  const meanCol = matrixMeanCol(m);
  const expectedMeanCol = [2.5, 3.5, 4.5, 5.5, 6.5];

  t.ok(
    deepEqual(meanCol, expectedMeanCol),
    `The column-wise mean should be ${expectedMeanCol}`
  );

  t.ok(
    deepEqual(matrixMeanCol([]), []),
    `The column-wise mean of an empty array should be an empty array`
  );
});
