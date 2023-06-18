/* eslint no-console: 1 */

import { test } from 'zora';

import { camelToConst, capitalize } from '../src/casing';

test('camelToConst()', (t) => {
  t.equal(
    camelToConst('ananasBananas'),
    'ANANAS_BANANAS',
    'The string should be transformed to ANANAS_BANANAS'
  );
  t.equal(
    camelToConst('ananasbananas'),
    'ANANASBANANAS',
    'The string should be transformed to ANANASBANANAS'
  );
});

test('capitalize()', (t) => {
  t.equal(
    capitalize('my fancyCase mega_string'),
    'My fancyCase mega_string',
    'The string should be transformed to "My fancyCase mega_string"'
  );
});
