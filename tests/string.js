/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { randomString } from '../src/string';

test('randomString()', t => {
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
