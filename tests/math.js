/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { isClose } from '../src/math';

test('isClose()', t => {
  const a = parseFloat((6760 / 100) * 100);
  const b = parseFloat(6760);

  t.ok(
    a !== b,
    'The two floats should not be equal due to floating point precision'
  );

  t.ok(isClose(a, b), 'But the two floats should be close to each other');

  t.ok(
    isClose(1.0004, 1.0005, 3),
    'The two floats should be close given the precision'
  );

  t.ok(
    !isClose(1.0004, 1.0005, 4),
    'The two floats should not be considered close anymore'
  );
});
