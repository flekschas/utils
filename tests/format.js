/* eslint no-console: 1 */

import { format as createFormat } from 'd3-format';
import { test } from 'zora';

import { getD3FormatSpecifier } from '../src/format';

test('getD3FormatSpecifier([0.00495, 0.00505])', (t) => {
  const format = createFormat(getD3FormatSpecifier([0.00495, 0.00505]));

  t.equal(format(0.00495), '0.00495', 'Should convert 0.00495 to "0.00495"');
  t.equal(format(0.00501), '0.00501', 'Should convert 0.00501 to "0.00501"');
  t.equal(
    format(0.00501337),
    '0.00501',
    'Should convert 0.00501337 to "0.00501"'
  );
  t.equal(format(0.005), '0.005', 'Should convert 0.005 to 0.005"');
  t.equal(format(0.00505), '0.00505', 'Should convert 0.00505 to "0.00505"');
});

test('getD3FormatSpecifier([0.0495, 0.0505])', (t) => {
  const format = createFormat(getD3FormatSpecifier([0.0495, 0.0505]));

  t.equal(format(0.0495), '0.0495', 'Should convert 0.0495 to "0.0495"');
  t.equal(format(0.0501), '0.0501', 'Should convert 0.0501 to "0.0501"');
  t.equal(format(0.0501337), '0.0501', 'Should convert 0.0501337 to "0.0501"');
  t.equal(format(0.05), '0.05', 'Should convert 0.05 to "0.05"');
  t.equal(format(0.0505), '0.0505', 'Should convert 0.0505 to "0.0505"');
});

test('getD3FormatSpecifier([0.495, 0.505])', (t) => {
  const format = createFormat(getD3FormatSpecifier([0.495, 0.505]));

  t.equal(format(0.495), '0.495', 'Should convert 0.495 to "0.495"');
  t.equal(format(0.501), '0.501', 'Should convert 0.501 to "0.501"');
  t.equal(format(0.501337), '0.501', 'Should convert 0.501337 to "0.501"');
  t.equal(format(0.5), '0.5', 'Should convert 0.5 to "0.5"');
  t.equal(format(0.505), '0.505', 'Should convert 0.505 to "0.505"');
});

test('getD3FormatSpecifier([0, 1])', (t) => {
  const format = createFormat(getD3FormatSpecifier([0, 1]));

  t.equal(format(0), '0', 'Should convert 0 to "0"');
  t.equal(format(0.1), '0.1', 'Should convert 0.1 to "0.1"');
  t.equal(format(0.1333), '0.133', 'Should convert 0.1333 to "0.133"');
  t.equal(format(0.9999), '1', 'Should convert 0.9999 to "1"');
  t.equal(format(1), '1', 'Should convert 1 to "1"');
});

test('getD3FormatSpecifier([4.95, 5.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([4.95, 5.05]));

  t.equal(format(4.95), '4.95', 'Should convert 4.95 to "4.95"');
  t.equal(format(5.01), '5.01', 'Should convert 5.01 to "5.01"');
  t.equal(format(5.01337), '5.013', 'Should convert 5.01337 to "5.013"');
  t.equal(format(5), '5', 'Should convert 5 to "5"');
  t.equal(format(5.05), '5.05', 'Should convert 5.05 to "5.05"');
});

test('getD3FormatSpecifier([40.95, 50.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([40.95, 50.05]));

  t.equal(format(40.95), '41', 'Should convert 40.95 to "41"');
  t.equal(format(50.5), '50.5', 'Should convert 50.5 to "50.5"');
  t.equal(format(50.01337), '50', 'Should convert 50.01337 to "50"');
  t.equal(format(50), '50', 'Should convert 50 to "50"');
  t.equal(format(50.05), '50', 'Should convert 50.05 to "50"');
});

test('getD3FormatSpecifier([400.95, 500.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([400.95, 500.05]));

  t.equal(format(400.95), '401', 'Should convert 400.95 to "401"');
  t.equal(format(432.01), '432', 'Should convert 432.01 to "432"');
  t.equal(format(500.01337), '500', 'Should convert 500.01337 to "500"');
  t.equal(format(500), '500', 'Should convert 500 to "500"');
  t.equal(format(500.05), '500', 'Should convert 500.05 to "500"');
});

test('getD3FormatSpecifier([4000.95, 5000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([4000.95, 5000.05]));

  t.equal(format(4000.95), '4,001', 'Should convert 4000.95 to "4,001"');
  t.equal(format(4123.95), '4,124', 'Should convert 4123.95 to "4,124"');
  t.equal(format(4500), '4,500', 'Should convert 4500 to "4,500"');
  t.equal(format(5000.05), '5,000', 'Should convert 5000.05 to "5,000"');
});

test('getD3FormatSpecifier([40000.95, 50000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([40000.95, 50000.05]));

  t.equal(format(40000.95), '40k', 'Should convert 40000.95 to "40k"');
  t.equal(format(41234.95), '41.2k', 'Should convert 41234.95 to "41.2k"');
  t.equal(format(41299.95), '41.3k', 'Should convert 41299.95 to "41.3k"');
  t.equal(format(50000), '50k', 'Should convert 50000 to "50k"');
  t.equal(format(50000.05), '50k', 'Should convert 50000.05 to "50k"');
});

test('getD3FormatSpecifier([400000.95, 500000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([400000.95, 500000.05]));

  t.equal(format(400000.95), '400k', 'Should convert 400000.95 to "400k"');
  t.equal(format(412345.95), '412k', 'Should convert 412345.95 to "412k"');
  t.equal(format(412999.95), '413k', 'Should convert 412999.95 to "413k"');
  t.equal(format(500000), '500k', 'Should convert 500000 to "500k"');
  t.equal(format(500000.05), '500k', 'Should convert 500000.05 to "500k"');
});

test('getD3FormatSpecifier([4000000.95, 5000000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([4000000.95, 5000000.05]));

  t.equal(format(4000000.95), '4M', 'Should convert 4000000.95 to "4M"');
  t.equal(format(4123456.95), '4.12M', 'Should convert 4123456.95 to "4.12M"');
  t.equal(format(4129999.95), '4.13M', 'Should convert 4129999.95 to "4.13M"');
  t.equal(format(5000000), '5M', 'Should convert 5000000 to "5M"');
  t.equal(format(5000000.05), '5M', 'Should convert 5000000.05 to "5M"');
});

test('getD3FormatSpecifier([40000000.95, 50000000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([40000000.95, 50000000.05]));

  t.equal(format(40000000.95), '40M', 'Should convert 40000000.95 to "40M"');
  t.equal(
    format(41234567.95),
    '41.2M',
    'Should convert 41234567.95 to "41.2M"'
  );
  t.equal(
    format(41299999.95),
    '41.3M',
    'Should convert 41299999.95 to "41.3M"'
  );
  t.equal(format(50000000), '50M', 'Should convert 50000000 to "50M"');
  t.equal(format(50000000.05), '50M', 'Should convert 50000000.05 to "50M"');
});

test('getD3FormatSpecifier([0, 500000000.05])', (t) => {
  const format = createFormat(getD3FormatSpecifier([0, 500000000.05]));

  t.equal(format(0), '0', 'Should convert 0 to "0"');
  t.equal(format(12.12), '12.1', 'Should convert 12.12 to "12.1"');
  t.equal(format(123.123), '123', 'Should convert 123.123 to "123"');
  t.equal(format(1234.1234), '1.23k', 'Should convert 1234.1234 to "1.23k"');
  t.equal(
    format(12345.12345),
    '12.3k',
    'Should convert 12345.12345 to "12.3k"'
  );
  t.equal(
    format(123456.123456),
    '123k',
    'Should convert 123456.123456 to "123k"'
  );
  t.equal(
    format(1234567.1234567),
    '1.23M',
    'Should convert 1234567.1234567 to "1.23M"'
  );
  t.equal(
    format(12345678.12345678),
    '12.3M',
    'Should convert 12345678.12345678 to "12.3M"'
  );
  t.equal(
    format(500000000.05),
    '500M',
    'Should convert 500000000.05 to "500M"'
  );
});
