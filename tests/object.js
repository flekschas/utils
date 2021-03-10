/* eslint no-console: 1 */

import '@babel/polyfill';
import deepEqual from 'fast-deep-equal/es6';
import { test } from 'zora';

import { deepClone, update } from '../src/object';

test('deepClone()', (t) => {
  let original = 1;
  let cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone primitive value');

  original = [];
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone empty array');
  t.ok(original !== cloned, 'Cloned empty array should have a new reference');

  original = [1];
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone simple array');
  t.ok(original !== cloned, 'Cloned simple array should have a new reference');

  original = [[[[1]]]];
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone nested array');
  t.ok(original !== cloned, 'Cloned nested array should have a new reference');

  original = {};
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone empty object');
  t.ok(original !== cloned, 'Cloned empty object should have a new reference');

  original = { x: 1 };
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone simple object');
  t.ok(original !== cloned, 'Cloned simple object should have a new reference');

  original = {
    x: 1,
    get y() {
      return this.x;
    },
    set z(v) {
      this.x = v;
    },
  };
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone object with getter & setter');
  t.ok(
    original !== cloned,
    'Cloned object with getter & setter should have a new reference'
  );

  t.equal(original.y, original.x, 'Object getter should work');

  original.z = 2;
  t.equal(original.y, original.x, 'Object setter should work');

  t.equal(cloned.y, 1, 'Cloned object should get its own value');

  cloned.z = 3;
  t.equal(cloned.y, 3, 'Cloned object setter/getter should still work');

  original = { x: { x: { x: { x: 1 } } } };
  cloned = deepClone(original);

  t.ok(deepEqual(original, cloned), 'Should clone nested object');
  t.ok(original !== cloned, 'Cloned nested object should have a new reference');
});

test('update()', (t) => {
  let target = { y: 'y' };
  let source = { x: 'x' };

  let updated = update(target, source);

  t.ok(deepEqual(updated, source), 'Should update props of target object');
  t.ok(target !== updated, 'Updated object should have a new reference');

  target = { 0: { y: 'y' }, 1: { x: 'x' } };
  source = { 0: { x: 'x' }, 1: { x: 'x' } };

  updated = update(target, source);

  t.ok(
    deepEqual(updated, source),
    'Should update nested props of target object'
  );
  t.ok(target !== updated, 'Updated object should have a new reference');
  t.ok(
    target[0] !== updated[0],
    'Updated nested prop object should have a new reference'
  );
  t.ok(
    target[1] === updated[1],
    'Unchanged nested prop object should have the **same** reference'
  );

  target = { 0: { y: 'y' } };
  source = {};

  updated = update(target, source);

  t.ok(
    target !== updated,
    'Update object should have a new reference even when only props were deleted'
  );

  target = { 0: { y: 'y' } };
  source = { 0: { y: 'y' } };

  updated = update(target, source);

  t.ok(
    target === updated,
    'Unchanged object should have the **same** reference'
  );
});
