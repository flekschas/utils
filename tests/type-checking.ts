/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import {
  isArray,
  isFunction,
  isHex,
  isNormFloat,
  isNormFloatArray,
  isNumber,
  isObject,
  isRgbArray,
  isRgbaArray,
  isRgbStr,
  isRgbaStr,
  isString,
  isUint8,
  isUint8Array,
} from '../src/type-checking';

describe('Type checking utilities', () => {
  test('isArray()', () => {
    const negative = [undefined, null, 'str', 10, {}, () => {}, new Date()];

    negative.forEach((v) => expect(isArray(v)).toBe(false));
    expect(isArray([])).toBe(true);
  });

  test('isFunction()', () => {
    const negative = [undefined, null, 'str', 10, [], {}, new Date()];
    const positive = [() => {}, function g() {}, Array.isArray];

    negative.forEach((v) => expect(isFunction(v)).toBe(false));
    positive.forEach((v) => expect(isFunction(v)).toBe(true));
  });

  test('isHex()', () => {
    const a = `#00ff00`;
    const b = `#0f0`;
    const c = `#00ff0`;
    const d = `#hallo`;

    expect(isHex(a)).toBe(true);
    expect(isHex(a.toUpperCase())).toBe(true);

    expect(isHex(b)).toBe(true);
    expect(isHex(b.toUpperCase())).toBe(true);

    expect(isHex(c)).toBe(false);
    expect(isHex(c.toUpperCase())).toBe(false);

    expect(isHex(d)).toBe(false);
    expect(isHex(d.toUpperCase())).toBe(false);

    expect(isHex([])).toBe(false);
  });

  test('isNormFloat()', () => {
    const a = 0.5;
    const b = 0;
    const c = 1;
    const d = -0.0001;
    const e = 1.0001;

    expect(isNormFloat(a)).toBe(true);
    expect(isNormFloat(b)).toBe(true);
    expect(isNormFloat(c)).toBe(true);

    expect(isNormFloat(d)).toBe(false);
    expect(isNormFloat(e)).toBe(false);
    expect(isNormFloat([])).toBe(false);
  });

  test('isNormFloatArray()', () => {
    const a = [0.5];
    const b = [];
    const c = [1.0001];

    expect(isNormFloatArray(a)).toBe(true);
    expect(isNormFloatArray(b)).toBe(true);

    expect(isNormFloatArray(c)).toBe(false);
    expect(isNormFloatArray({})).toBe(false);
  });

  test('isNumber()', () => {
    const a = 0.5;
    const b = Number(0.5);

    expect(isNumber(a)).toBe(true);
    expect(isNumber(b)).toBe(true);

    expect(isNumber(undefined)).toBe(false);
    expect(isNumber(null)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber('s')).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber({})).toBe(false);
  });

  test('isObject()', () => {
    const negative = [undefined, null, 'str', 10, [], () => {}, new Date()];

    negative.forEach((v) => expect(isObject(v)).toBe(false));
    expect(isObject({})).toBe(true);
  });

  test('isRgbArray()', () => {
    const a = [255, 0, 255];
    const b = [1, 0, 1];
    const c = [1.0, 0.0, 1.0];

    const d = [255, 255, 255, 255];
    const e = [255, 255];
    const f = [255, 0.5, 255];

    expect(isRgbArray(a)).toBe(true);
    expect(isRgbArray(b)).toBe(true);
    expect(isRgbArray(c)).toBe(true);

    expect(isRgbArray(d)).toBe(false);
    expect(isRgbArray(e)).toBe(false);
    expect(isRgbArray(f)).toBe(false);
    expect(isRgbArray({})).toBe(false);
  });

  test('isRgbaArray()', () => {
    const a = [255, 0, 255, 255];
    const b = [1, 0, 1, 1];
    const c = [255, 0, 255, 1.0];

    const d = [255, 255, 255, 255, 255];
    const e = [255, 255, 255];
    const f = [255, 0.5, 255, 255];
    const h = [1, 0.5, 1, 255];

    expect(isRgbaArray(a)).toBe(true);
    expect(isRgbaArray(b)).toBe(true);
    expect(isRgbaArray(c)).toBe(true);

    expect(isRgbaArray(d)).toBe(false);
    expect(isRgbaArray(e)).toBe(false);
    expect(isRgbaArray(f)).toBe(false);
    expect(isRgbaArray(h)).toBe(false);
    expect(isRgbaArray({})).toBe(false);
  });

  test('isRgbStr()', () => {
    const a = 'rgb(1,1,1)';
    const b = 'rgb(1,         1, 1.0)';
    const c = 'rgb(255,         9, 120)';

    const d = 'rgba(1,1,1)';
    const e = 'rgb(-1,1,1)';
    const f = 'rgb(1,1,1,1,1)';
    const g = 'rgb(1,1)';
    const h = 'rgb(hi!)';

    expect(isRgbStr(a)).toBe(true);
    expect(isRgbStr(b)).toBe(true);
    expect(isRgbStr(c)).toBe(true);

    expect(isRgbStr(d)).toBe(false);
    expect(isRgbStr(e)).toBe(false);
    expect(isRgbStr(f)).toBe(false);
    expect(isRgbStr(g)).toBe(false);
    expect(isRgbStr(h)).toBe(false);
    expect(isRgbStr({})).toBe(false);
  });

  test('isRgbaStr()', () => {
    const a = 'rgba(1,1,1,1)';
    const b = 'rgba(1,         1, 1.0, 0.5)';
    const c = 'rgba(255,         9, 120, 127)';

    const d = 'rgb(1,1,1,1)';
    const e = 'rgba(-1,1,1,1)';
    const f = 'rgba(1,1,1,1,1)';
    const g = 'rgba(1,1,1)';
    const h = 'rgba(hi!)';

    expect(isRgbaStr(a)).toBe(true);
    expect(isRgbaStr(b)).toBe(true);
    expect(isRgbaStr(c)).toBe(true);

    expect(isRgbaStr(d)).toBe(false);
    expect(isRgbaStr(e)).toBe(false);
    expect(isRgbaStr(f)).toBe(false);
    expect(isRgbaStr(g)).toBe(false);
    expect(isRgbaStr(h)).toBe(false);
    expect(isRgbaStr({})).toBe(false);
  });

  test('isString()', () => {
    const a = '';
    const b = 's';
    const c = String('s');

    expect(isString(a)).toBe(true);
    expect(isString(b)).toBe(true);
    expect(isString(c)).toBe(true);

    expect(isString(undefined)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(true)).toBe(false);
    expect(isString(1)).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString({})).toBe(false);
  });

  test('isUint8()', () => {
    const a = 0;
    const b = 255;

    const c = -1;
    const d = 256;
    const e = 0.5;

    expect(isUint8(a)).toBe(true);
    expect(isUint8(b)).toBe(true);

    expect(isUint8(c)).toBe(false);
    expect(isUint8(d)).toBe(false);
    expect(isUint8(e)).toBe(false);
    expect(isUint8({})).toBe(false);
  });

  test('isUint8Array()', () => {
    const a = [];
    const b = [0];
    const c = [255];

    const d = [-1];
    const e = [256];
    const f = [0.5];

    expect(isUint8Array(a)).toBe(true);
    expect(isUint8Array(b)).toBe(true);
    expect(isUint8Array(c)).toBe(true);

    expect(isUint8Array(d)).toBe(false);
    expect(isUint8Array(e)).toBe(false);
    expect(isUint8Array(f)).toBe(false);
    expect(isUint8Array(0)).toBe(false);
    expect(isUint8Array({})).toBe(false);
  });
});
