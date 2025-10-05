/* eslint no-console: 1 */

import { format as createFormat } from 'd3-format';
import { describe, test, expect } from "vitest";

import { getD3FormatSpecifier } from '../src/format';

describe('getD3FormatSpecifier', () => {
  test('[0.00495, 0.00505]', () => {
    const format = createFormat(getD3FormatSpecifier([0.00495, 0.00505]));

    expect(format(0.00495)).toBe('0.00495');
    expect(format(0.00501)).toBe('0.00501');
    expect(format(0.00501337)).toBe('0.00501');
    expect(format(0.005)).toBe('0.005');
    expect(format(0.00505)).toBe('0.00505');
  });

  test('[0.0495, 0.0505]', () => {
    const format = createFormat(getD3FormatSpecifier([0.0495, 0.0505]));

    expect(format(0.0495)).toBe('0.0495');
    expect(format(0.0501)).toBe('0.0501');
    expect(format(0.0501337)).toBe('0.0501');
    expect(format(0.05)).toBe('0.05');
    expect(format(0.0505)).toBe('0.0505');
  });

  test('[0.495, 0.505]', () => {
    const format = createFormat(getD3FormatSpecifier([0.495, 0.505]));

    expect(format(0.495)).toBe('0.495');
    expect(format(0.501)).toBe('0.501');
    expect(format(0.501337)).toBe('0.501');
    expect(format(0.5)).toBe('0.5');
    expect(format(0.505)).toBe('0.505');
  });

  test('[0, 1]', () => {
    const format = createFormat(getD3FormatSpecifier([0, 1]));

    expect(format(0)).toBe('0');
    expect(format(0.1)).toBe('0.1');
    expect(format(0.1333)).toBe('0.133');
    expect(format(0.9999)).toBe('1');
    expect(format(1)).toBe('1');
  });

  test('[4.95, 5.05]', () => {
    const format = createFormat(getD3FormatSpecifier([4.95, 5.05]));

    expect(format(4.95)).toBe('4.95');
    expect(format(5.01)).toBe('5.01');
    expect(format(5.01337)).toBe('5.013');
    expect(format(5)).toBe('5');
    expect(format(5.05)).toBe('5.05');
  });

  test('[40.95, 50.05]', () => {
    const format = createFormat(getD3FormatSpecifier([40.95, 50.05]));

    expect(format(40.95)).toBe('41');
    expect(format(50.5)).toBe('50.5');
    expect(format(50.01337)).toBe('50');
    expect(format(50)).toBe('50');
    expect(format(50.05)).toBe('50');
  });

  test('[400.95, 500.05]', () => {
    const format = createFormat(getD3FormatSpecifier([400.95, 500.05]));

    expect(format(400.95)).toBe('401');
    expect(format(432.01)).toBe('432');
    expect(format(500.01337)).toBe('500');
    expect(format(500)).toBe('500');
    expect(format(500.05)).toBe('500');
  });

  test('[4000.95, 5000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([4000.95, 5000.05]));

    expect(format(4000.95)).toBe('4,001');
    expect(format(4123.95)).toBe('4,124');
    expect(format(4500)).toBe('4,500');
    expect(format(5000.05)).toBe('5,000');
  });

  test('[40000.95, 50000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([40000.95, 50000.05]));

    expect(format(40000.95)).toBe('40k');
    expect(format(41234.95)).toBe('41.2k');
    expect(format(41299.95)).toBe('41.3k');
    expect(format(50000)).toBe('50k');
    expect(format(50000.05)).toBe('50k');
  });

  test('[400000.95, 500000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([400000.95, 500000.05]));

    expect(format(400000.95)).toBe('400k');
    expect(format(412345.95)).toBe('412k');
    expect(format(412999.95)).toBe('413k');
    expect(format(500000)).toBe('500k');
    expect(format(500000.05)).toBe('500k');
  });

  test('[4000000.95, 5000000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([4000000.95, 5000000.05]));

    expect(format(4000000.95)).toBe('4M');
    expect(format(4123456.95)).toBe('4.12M');
    expect(format(4129999.95)).toBe('4.13M');
    expect(format(5000000)).toBe('5M');
    expect(format(5000000.05)).toBe('5M');
  });

  test('[40000000.95, 50000000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([40000000.95, 50000000.05]));

    expect(format(40000000.95)).toBe('40M');
    expect(format(41234567.95)).toBe('41.2M');
    expect(format(41299999.95)).toBe('41.3M');
    expect(format(50000000)).toBe('50M');
    expect(format(50000000.05)).toBe('50M');
  });

  test('[0, 500000000.05]', () => {
    const format = createFormat(getD3FormatSpecifier([0, 500000000.05]));

    expect(format(0)).toBe('0');
    expect(format(12.12)).toBe('12.1');
    expect(format(123.123)).toBe('123');
    expect(format(1234.1234)).toBe('1.23k');
    expect(format(12345.12345)).toBe('12.3k');
    expect(format(123456.123456)).toBe('123k');
    expect(format(1234567.1234567)).toBe('1.23M');
    expect(format(12345678.12345678)).toBe('12.3M');
    expect(format(500000000.05)).toBe('500M');
  });

  test('[1, 1]', () => {
    const format = createFormat(getD3FormatSpecifier([1, 1]));

    expect(format(-1234.5678)).toBe('−1,230');
    expect(format(-10)).toBe('−10');
    expect(format(-0.123456)).toBe('−0.123');
    expect(format(0)).toBe('0');
    expect(format(0.123456)).toBe('0.123');
    expect(format(10)).toBe('10');
    expect(format(1234.5678)).toBe('1,230');
  });

  test('[-2.58194, -0.00044]', () => {
    const format = createFormat(getD3FormatSpecifier([-2.58194, -0.00044]));

    expect(format(-2.58194)).toBe('−2.58');
    expect(format(-0.512345678)).toBe('−0.512');
    expect(format(-0.00044)).toBe('−0.00044');
  });

  test('[-20, 20]', () => {
    const format = createFormat(getD3FormatSpecifier([-20, 20]));

    expect(format(-20)).toBe('−20');
    expect(format(-12.34567)).toBe('−12.3');
    expect(format(-5)).toBe('−5');
    expect(format(-0.0001337)).toBe('−0.000134');
    expect(format(0)).toBe('0');
    expect(format(-0.0001337)).toBe('−0.000134');
    expect(format(5)).toBe('5');
    expect(format(0.0001337)).toBe('0.000134');
    expect(format(12.34567)).toBe('12.3');
    expect(format(20)).toBe('20');
  });
});
