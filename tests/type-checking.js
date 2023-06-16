/* eslint no-console: 1 */

import { test } from 'zora';

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

test('isArray()', (t) => {
  const negative = [undefined, null, 'str', 10, {}, () => {}, new Date()];

  negative.forEach((v) => t.ok(!isArray(v), `${v} is not an array`));
  t.ok(isArray([]), '[] is an array');
});

test('isFunction()', (t) => {
  const negative = [undefined, null, 'str', 10, [], {}, new Date()];
  const positive = [() => {}, function g() {}, Array.isArray];

  negative.forEach((v) => t.ok(!isFunction(v), `${v} is not a function`));
  positive.forEach((v) => t.ok(isFunction(v), `${v} is a function`));
});

test('isHex()', (t) => {
  const a = `#00ff00`;
  const b = `#0f0`;
  const c = `#00ff0`;
  const d = `#hallo`;

  t.ok(isHex(a), `${a} is a HEX string`);
  t.ok(isHex(a.toUpperCase()), `${a.toUpperCase()} is a HEX string`);

  t.ok(isHex(b), `${b} is a HEX string`);
  t.ok(isHex(b.toUpperCase()), `${b.toUpperCase()} is a HEX string`);

  t.ok(!isHex(c), `${c} is *NOT* a HEX string`);
  t.ok(!isHex(c.toUpperCase()), `${c.toUpperCase()} is *NOT* a HEX string`);

  t.ok(!isHex(d), `${d} is *NOT* a HEX string`);
  t.ok(!isHex(d.toUpperCase()), `${d.toUpperCase()} is *NOT* a HEX string`);

  t.ok(!isHex([]), '[] is *NOT* a HEX string');
});

test('isNormFloat()', (t) => {
  const a = 0.5;
  const b = 0;
  const c = 1;
  const d = -0.0001;
  const e = 1.0001;

  t.ok(isNormFloat(a), `${a} is a normalized float`);
  t.ok(isNormFloat(b), `${b} is a normalized float`);
  t.ok(isNormFloat(c), `${c} is a normalized float`);

  t.ok(!isNormFloat(d), `${d} is *NOT* a normalized float`);
  t.ok(!isNormFloat(e), `${e} is *NOT* a normalized float`);
  t.ok(!isNormFloat([]), '[] is *NOT* a normalized float');
});

test('isNormFloatArray()', (t) => {
  const a = [0.5];
  const b = [];
  const c = [1.0001];

  t.ok(isNormFloatArray(a), `${a} is a normalized float array`);
  t.ok(isNormFloatArray(b), `${b} is a normalized float array`);

  t.ok(!isNormFloatArray(c), `${c} is *NOT* a normalized float array`);
  t.ok(!isNormFloatArray({}), '{} is *NOT* a normalized float array');
});

test('isNumber()', (t) => {
  const a = 0.5;
  const b = Number(0.5);

  t.ok(isNumber(a), `${a} is a normalized float array`);
  t.ok(isNumber(b), `${b} is a normalized float array`);

  t.ok(!isNumber(undefined), 'undefined is *NOT* a normalized float array');
  t.ok(!isNumber(null), 'null is *NOT* a normalized float array');
  t.ok(!isNumber(true), 'true is *NOT* a normalized float array');
  t.ok(!isNumber('s'), 's is *NOT* a normalized float array');
  t.ok(!isNumber([]), '[] is *NOT* a normalized float array');
  t.ok(!isNumber({}), '{} is *NOT* a normalized float array');
});

test('isObject()', (t) => {
  const negative = [undefined, null, 'str', 10, [], () => {}, new Date()];

  negative.forEach((v) => t.ok(!isObject(v), `${v} is not an object`));
  t.ok(isObject({}), '{} is an object');
});

test('isRgbArray()', (t) => {
  const a = [255, 0, 255];
  const b = [1, 0, 1];
  const c = [1.0, 0.0, 1.0];

  const d = [255, 255, 255, 255];
  const e = [255, 255];
  const f = [255, 0.5, 255];

  t.ok(isRgbArray(a), `${a} is a RGB array`);
  t.ok(isRgbArray(b), `${b} is a RGB array`);
  t.ok(isRgbArray(c), `${c} is a RGB array`);

  t.ok(!isRgbArray(d), `${d} is *NOT* a RGB array`);
  t.ok(!isRgbArray(e), `${e} is *NOT* a RGB array`);
  t.ok(!isRgbArray(f), `${f} is *NOT* a RGB array`);
  t.ok(!isRgbArray({}), '{} is *NOT* a RGB array');
});

test('isRgbaArray()', (t) => {
  const a = [255, 0, 255, 255];
  const b = [1, 0, 1, 1];
  const c = [255, 0, 255, 1.0];

  const d = [255, 255, 255, 255, 255];
  const e = [255, 255, 255];
  const f = [255, 0.5, 255, 255];
  const h = [1, 0.5, 1, 255];

  t.ok(isRgbaArray(a), `${a} is a RGBA array`);
  t.ok(isRgbaArray(b), `${b} is a RGBA array`);
  t.ok(isRgbaArray(c), `${c} is a RGBA array`);

  t.ok(!isRgbaArray(d), `${d} is *NOT* a RGBA array`);
  t.ok(!isRgbaArray(e), `${e} is *NOT* a RGBA array`);
  t.ok(!isRgbaArray(f), `${f} is *NOT* a RGBA array`);
  t.ok(!isRgbaArray(h), `${h} is *NOT* a RGBA array`);
  t.ok(!isRgbaArray({}), '{} is *NOT* a RGBA array');
});

test('isRgbStr()', (t) => {
  const a = 'rgb(1,1,1)';
  const b = 'rgb(1,         1, 1.0)';
  const c = 'rgb(255,         9, 120)';

  const d = 'rgba(1,1,1)';
  const e = 'rgb(-1,1,1)';
  const f = 'rgb(1,1,1,1,1)';
  const g = 'rgb(1,1)';
  const h = 'rgb(hi!)';

  t.ok(isRgbStr(a), `${a} is a RGB string`);
  t.ok(isRgbStr(b), `${b} is a RGB string`);
  t.ok(isRgbStr(c), `${c} is a RGB string`);

  t.ok(!isRgbStr(d), `${d} is *NOT* a RGB string`);
  t.ok(!isRgbStr(e), `${e} is *NOT* a RGB string`);
  t.ok(!isRgbStr(f), `${f} is *NOT* a RGB string`);
  t.ok(!isRgbStr(g), `${g} is *NOT* a RGB string`);
  t.ok(!isRgbStr(h), `${h} is *NOT* a RGB string`);
  t.ok(!isRgbStr({}), '{} is *NOT* a RGB string');
});

test('isRgbaStr()', (t) => {
  const a = 'rgba(1,1,1,1)';
  const b = 'rgba(1,         1, 1.0, 0.5)';
  const c = 'rgba(255,         9, 120, 127)';

  const d = 'rgb(1,1,1,1)';
  const e = 'rgba(-1,1,1,1)';
  const f = 'rgba(1,1,1,1,1)';
  const g = 'rgba(1,1,1)';
  const h = 'rgba(hi!)';

  t.ok(isRgbaStr(a), `${a} is a RGBA string`);
  t.ok(isRgbaStr(b), `${b} is a RGBA string`);
  t.ok(isRgbaStr(c), `${c} is a RGBA string`);

  t.ok(!isRgbaStr(d), `${d} is *NOT* a RGBA string`);
  t.ok(!isRgbaStr(e), `${e} is *NOT* a RGBA string`);
  t.ok(!isRgbaStr(f), `${f} is *NOT* a RGBA string`);
  t.ok(!isRgbaStr(g), `${g} is *NOT* a RGBA string`);
  t.ok(!isRgbaStr(h), `${h} is *NOT* a RGBA string`);
  t.ok(!isRgbaStr({}), '{} is *NOT* a RGBA string');
});

test('isString()', (t) => {
  const a = '';
  const b = 's';
  const c = String('s');

  t.ok(isString(a), `${a} is a string`);
  t.ok(isString(b), `${b} is a string`);
  t.ok(isString(c), `${c} is a string`);

  t.ok(!isString(undefined), 'undefined is *NOT* a RGBA array');
  t.ok(!isString(null), 'null is *NOT* a RGBA array');
  t.ok(!isString(true), 'true is *NOT* a RGBA array');
  t.ok(!isString(1), '1 is *NOT* a RGBA array');
  t.ok(!isString([]), '[] is *NOT* a RGBA array');
  t.ok(!isString({}), '{} is *NOT* a RGBA array');
});

test('isUint8()', (t) => {
  const a = 0;
  const b = 255;

  const c = -1;
  const d = 256;
  const e = 0.5;

  t.ok(isUint8(a), `${a} is a Uint8`);
  t.ok(isUint8(b), `${b} is a Uint8`);

  t.ok(!isUint8(c), `${c} is *NOT* a Uint8`);
  t.ok(!isUint8(d), `${d} is *NOT* a Uint8`);
  t.ok(!isUint8(e), `${e} is *NOT* a Uint8`);
  t.ok(!isUint8({}), '{} is *NOT* a Uint8');
});

test('isUint8Array()', (t) => {
  const a = [];
  const b = [0];
  const c = [255];

  const d = [-1];
  const e = [256];
  const f = [0.5];

  t.ok(isUint8Array(a), `${a} is a Uint8 array`);
  t.ok(isUint8Array(b), `${b} is a Uint8 array`);
  t.ok(isUint8Array(c), `${c} is a Uint8 array`);

  t.ok(!isUint8Array(d), `${d} is *NOT* a Uint8 array`);
  t.ok(!isUint8Array(e), `${e} is *NOT* a Uint8 array`);
  t.ok(!isUint8Array(f), `${f} is *NOT* a Uint8 array`);
  t.ok(!isUint8Array(0), '0 is *NOT* a Uint8 array');
  t.ok(!isUint8Array({}), '{} is *NOT* a Uint8 array');
});
