/* eslint no-console: 1 */

import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { decToRgb } from '../src/color';

test('decToRgb()', (t) => {
  t.ok(
    deepEqual(decToRgb(0x000000), [0, 0, 0]),
    'The decimal and rgb colors equal'
  );

  t.ok(
    deepEqual(decToRgb(0x110121), [17, 1, 33]),
    'The decimal and rgb colors equal'
  );

  t.ok(
    deepEqual(decToRgb(0x0088ff), [0, 136, 255]),
    'The decimal and rgb colors equal'
  );

  t.ok(
    deepEqual(decToRgb(0xfff1de), [255, 241, 222]),
    'The decimal and rgb colors equal'
  );

  t.ok(
    deepEqual(decToRgb(0xffffff), [255, 255, 255]),
    'The decimal and rgb colors equal'
  );
});
