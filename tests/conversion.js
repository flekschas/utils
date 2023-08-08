/* eslint no-console: 1 */

import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { iteratorToArray } from '../src/conversion';

test('iteratorToArray()', (t) => {
  t.ok(
    Array.isArray(iteratorToArray(new Set([1, 2, 3]))),
    'Should convert iterator to array'
  );

  t.ok(
    deepEqual(iteratorToArray(new Set([1, 2, 3])), [1, 2, 3]),
    'Should convert iterator to array with equal elements'
  );
});
