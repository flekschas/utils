/* eslint no-console: 1 */

import '@babel/polyfill';
import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { sortDesc, argSort, sortPos } from '../src/sorting';

test('argSort()', t => {
  let input = [9, 5, 11, -1, 0];
  let sorted = [-1, 0, 5, 9, 11];

  let sortedIdx = argSort(input);

  t.ok(
    deepEqual(
      sorted,
      sortedIdx.map(idx => input[idx])
    ),
    'The indices be sorted ascending'
  );

  sortedIdx = argSort(input, { comparator: sortDesc });
  sorted = [11, 9, 5, 0, -1];

  t.ok(
    deepEqual(
      sorted,
      sortedIdx.map(idx => input[idx])
    ),
    'The indices be sorted descending'
  );

  input = [9, null, 11, -1, 0];
  sortedIdx = argSort(input, { ignoreNull: true });
  sorted = [-1, 0, 9, 11];

  t.ok(
    deepEqual(
      sorted,
      sortedIdx.map(idx => input[idx])
    ),
    'Null values should be ignored'
  );

  input = [[9], [5], [11], [-1], [0]];
  sortedIdx = argSort(input, { getter: x => x[0] });
  sorted = [[-1], [0], [5], [9], [11]];

  t.ok(
    deepEqual(
      sorted,
      sortedIdx.map(idx => input[idx])
    ),
    'Custom getter should be supported'
  );
});

test('sortPos()', t => {
  let input = [9, 5, 11, -1, 0];
  let sorted = [-1, 0, 5, 9, 11];

  let sortedPos = sortPos(input);

  t.ok(
    deepEqual(
      sorted,
      sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])
    ),
    'The positions be sorted ascending'
  );

  sortedPos = sortPos(input, { comparator: sortDesc });
  sorted = [11, 9, 5, 0, -1];

  t.ok(
    deepEqual(
      sorted,
      sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])
    ),
    'The positions be sorted descending'
  );

  input = [9, null, 11, -1, 0];
  sortedPos = sortPos(input, { ignoreNull: true });
  sorted = [-1, 0, 9, 11];

  t.ok(
    deepEqual(
      sorted,
      sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])
    ),
    'Null values should be ignored'
  );

  input = [[9], [5], [11], [-1], [0]];
  sortedPos = sortPos(input, { getter: x => x[0] });
  sorted = [[-1], [0], [5], [9], [11]];

  t.ok(
    deepEqual(
      sorted,
      sortedPos.reduce((out, pos, i) => {
        out[pos] = input[i];
        return out;
      }, [])
    ),
    'Custom getter should be supported'
  );
});
