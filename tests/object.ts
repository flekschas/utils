/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import { deepClone, update, invert } from '../src/object';

describe('Object utilities', () => {
  describe('deepClone()', () => {
    test('clones primitive values', () => {
      let original = 1;
      let cloned = deepClone(original);

      expect(cloned).toEqual(original);
    });

    test('clones empty array', () => {
      const original = [];
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });

    test('clones simple array', () => {
      const original = [1];
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });

    test('clones nested array', () => {
      const original = [[[[1]]]];
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });

    test('clones empty object', () => {
      const original = {};
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });

    test('clones simple object', () => {
      const original = { x: 1 };
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });

    test('clones object with getter & setter', () => {
      const original = {
        x: 1,
        get y() {
          return this.x;
        },
        set z(v) {
          this.x = v;
        },
      };
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);

      expect(original.y).toBe(original.x);

      original.z = 2;
      expect(original.y).toBe(original.x);

      expect(cloned.y).toBe(1);

      cloned.z = 3;
      expect(cloned.y).toBe(3);
    });

    test('clones nested object', () => {
      const original = { x: { x: { x: { x: 1 } } } };
      const cloned = deepClone(original);

      expect(cloned).toEqual(original);
      expect(original !== cloned).toBe(true);
    });
  });

  describe('update()', () => {
    test('updates props of target object', () => {
      let target = { y: 'y' };
      let source = { x: 'x' };

      let updated = update(target, source);

      expect(updated).toEqual(source);
      expect(target !== updated).toBe(true);
    });

    test('updates nested props', () => {
      const target = { 0: { y: 'y' }, 1: { x: 'x' } };
      const source = { 0: { x: 'x' }, 1: { x: 'x' } };

      const updated = update(target, source);

      expect(updated).toEqual(source);
      expect(target !== updated).toBe(true);
      expect(target[0] !== updated[0]).toBe(true);
      expect(target[1] === updated[1]).toBe(true);
    });

    test('has new reference when only props were deleted', () => {
      const target = { 0: { y: 'y' } };
      const source = {};

      const updated = update(target, source);

      expect(target !== updated).toBe(true);
    });

    test('has same reference when unchanged', () => {
      const target = { 0: { y: 'y' } };
      const source = { 0: { y: 'y' } };

      const updated = update(target, source);

      expect(target === updated).toBe(true);
    });
  });

  test('invert()', () => {
    const obj = { a: 'AA', b: 'BB', c: 'CC' };
    expect(invert(obj)).toEqual({ AA: 'a', BB: 'b', CC: 'c' });

    console.log(invert({ a: null, b: undefined, c: {} }));
  });
});
