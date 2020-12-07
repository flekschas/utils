/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { clamp, isClose } from '../src/math';

test('clamp()', t => {
  const a = Array(100)
    .fill()
    .map(() => Math.random() * 100);
  const min = 33;
  const max = 66;
  const clamped = a.map(v => clamp(v, min, max));

  t.ok(
    clamped.every(v => v >= min && v <= max),
    `All values are greater or equal to ${min} and smaller or equal to ${max}`
  );
});

test('isClose()', t => {
  const a = parseFloat((6760 / 100) * 100);
  const b = parseFloat(6760);

  t.ok(
    a !== b,
    'The two floats should not be equal due to floating point precision'
  );

  t.ok(isClose(a, b), 'But the two floats should be close to each other');

  t.ok(
    isClose(1.4, 1.5, 0),
    'The two floats should be close given the precision'
  );

  t.ok(
    !isClose(1.4, 1.5, 2),
    'The two floats should not be close given the precision'
  );

  t.ok(
    isClose(1.0004, 1.0005, 3),
    'The two floats should be close given the precision'
  );

  t.ok(
    !isClose(1.0004, 1.0005, 5),
    'The two floats should not be considered close anymore'
  );
});
