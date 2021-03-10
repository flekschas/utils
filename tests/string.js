/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { nthIndexOf, randomString } from '../src/string';

test('nthIndexOf()', (t) => {
  t.equal(
    nthIndexOf('ananas', 'a', 0),
    'ananas'.indexOf('a'),
    'The first index of "a" should be the same as found by `indexOf`'
  );

  t.equal(
    nthIndexOf('ananas', 'a', 1),
    'ananas'.indexOf('a', 'ananas'.indexOf('a') + 1),
    'The second index of "a" should be 2'
  );

  t.equal(
    nthIndexOf('ananas', 'a', 2),
    4,
    'The third index of "a" should be 4'
  );

  t.equal(
    nthIndexOf('ananas', 'a', 3),
    -1,
    'The forth index of "a" should be -1 because there are only three "a"s'
  );
});

test('randomString()', (t) => {
  t.equal(
    randomString(6).length,
    6,
    'The random string should contain 6 characters'
  );

  t.ok(
    /[0-9]/.test(randomString(6, '0123456789')),
    'The random string should only contain numbers'
  );
});
