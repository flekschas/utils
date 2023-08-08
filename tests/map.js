/* eslint no-console: 1 */

import { test } from 'zora';

import { mergeMaps } from '../src/map';

test('mergeMaps()', (t) => {
  t.equals(
    mergeMaps(
      new Map([
        [1, '1'],
        [2, '2'],
      ]),
      new Map([
        [3, '3'],
        [4, '4'],
      ])
    ),
    new Map([
      [1, '1'],
      [2, '2'],
      [3, '3'],
      [4, '4'],
    ]),
    'Two non-overlapping maps should be merged'
  );

  t.equals(
    mergeMaps(
      new Map([
        [1, '1'],
        [2, '2'],
      ]),
      new Map([
        [2, '2'],
        [3, '3'],
      ])
    ),
    new Map([
      [1, '1'],
      [2, '2'],
      [3, '3'],
    ]),
    'Two partially-overlapping maps should be merged'
  );
});
