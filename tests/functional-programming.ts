/* eslint no-console: 1 */

import { describe, test, expect } from "vitest";

import { assign } from '../src/object';
import {
  pipe,
  withConstructor,
  withForwardedMethod,
  withReadOnlyProperty,
  withStaticProperty,
} from '../src/functional-programming';

describe('Functional programming utilities', () => {
  test('withConstructor()', () => {
    const createObj = () => pipe(withConstructor(createObj))({});

    const o = createObj();

    expect(o.constructor).toBe(createObj);
  });

  test('withForwardedMethod()', () => {
    const createObj = (name, value) => {
      const set = (newValue) => {
        // eslint-disable-next-line no-param-reassign
        value = newValue;
      };

      return pipe(
        withStaticProperty(name, value),
        withForwardedMethod('test', set)
      )({});
    };

    const o = createObj('v', 1);

    expect(o.v).toBe(1);

    o.test(2);

    expect(o.v).toBe(1);
  });

  test('withStaticProperty()', () => {
    const createObj = (name, value) => {
      const withMethods = () => (self) =>
        assign(self, {
          set(newValue) {
            // eslint-disable-next-line no-param-reassign
            value = newValue;
          },
        });

      return pipe(withStaticProperty(name, value), withMethods())({});
    };

    const o = createObj('v', 1);

    expect(o.v).toBe(1);

    o.set(2);

    expect(o.v).toBe(1);
  });

  test('withReadOnlyProperty()', () => {
    const createObj = (name, getter) =>
      pipe(withReadOnlyProperty(name, getter))({});

    let v = 1;

    const o = createObj('v', () => v);

    expect(o.v).toBe(1);

    v = 2;

    expect(o.v).toBe(2);
  });
});
