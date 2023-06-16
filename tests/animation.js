/* eslint no-console: 1 */

import { test } from 'zora';

import {
  cubicInOut,
  interpolateNumber,
  interpolateVector,
} from '../src/animation';

test('cubicInOut()', (t) => {
  // Sanity checks
  t.equal(cubicInOut(0), 0, 'Initial time should ease to 0');
  t.equal(cubicInOut(1), 1, 'End time should ease to 1');
  t.equal(cubicInOut(0.5), 0.5, 'Half time should ease to 0.5');

  // The important test
  t.equal(cubicInOut(0.25), 0.0625, 'Half time should ease to 0.0625');
  t.equal(cubicInOut(0.75), 0.9375, 'Half time should ease to 0.9375');
});

test('interpolateNumber()', (t) => {
  const a = 0;
  const b = 1;

  t.equal(interpolateNumber(a, b, 0), a, `Initial time should ease to ${a}`);
  t.equal(interpolateNumber(a, b, 1), b, `End time should ease to ${a}`);
  t.equal(
    interpolateNumber(a, b, -1),
    a,
    `Before initial time should ease to ${a}`
  );
  t.equal(interpolateNumber(a, b, 2), b, `After end time should ease to ${a}`);
  t.equal(
    interpolateNumber(a, b, 0.5),
    a + (b - a) / 2,
    `Half time should ease to ${a + (b - a) / 2}`
  );
});

test('interpolateVector()', (t) => {
  const a = [0, 1];
  const b = [1, 2];

  t.equal(interpolateVector(a, b, 0), a, `Initial time should ease to ${a}`);
  t.equal(interpolateVector(a, b, 1), b, `End time should ease to ${a}`);
  t.equal(
    interpolateVector(a, b, -1),
    a,
    `Before initial time should ease to ${a}`
  );
  t.equal(interpolateVector(a, b, 2), b, `After end time should ease to ${a}`);
  t.equal(
    interpolateVector(a, b, 0.5),
    [0.5, 1.5],
    `Half time should ease to ${[0.5, 1.5]}`
  );
});
