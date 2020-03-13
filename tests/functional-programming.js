/* eslint no-console: 1 */

import '@babel/polyfill';
import { test } from 'zora';

import { assign } from '../src/object';
import {
  pipe,
  withConstructor,
  withForwardedMethod,
  withReadOnlyProperty,
  withStaticProperty
} from '../src/functional-programming';

test('withConstructor()', t => {
  const createObj = () => pipe(withConstructor(createObj))({});

  const o = createObj();

  t.equal(o.constructor, createObj, 'The constructor should be createObj()');
});

test('withForwardedMethod()', t => {
  const createObj = (name, value) => {
    const set = newValue => {
      // eslint-disable-next-line no-param-reassign
      value = newValue;
    };

    return pipe(
      withStaticProperty(name, value),
      withForwardedMethod('test', set)
    )({});
  };

  const o = createObj('v', 1);

  t.equal(o.v, 1, 'The value should be 1');

  o.test(2);

  t.equal(o.v, 1, 'The value should still be 1');
});

test('withStaticProperty()', t => {
  const createObj = (name, value) => {
    const withMethods = () => self =>
      assign(self, {
        set(newValue) {
          // eslint-disable-next-line no-param-reassign
          value = newValue;
        }
      });

    return pipe(withStaticProperty(name, value), withMethods())({});
  };

  const o = createObj('v', 1);

  t.equal(o.v, 1, 'The value should be 1');

  o.set(2);

  t.equal(o.v, 1, 'The value should still be 1');
});

test('withReadOnlyProperty()', t => {
  const createObj = (name, getter) =>
    pipe(withReadOnlyProperty(name, getter))({});

  let v = 1;

  const o = createObj('v', () => v);

  t.equal(o.v, 1, 'The value should be 1');

  v = 2;

  t.equal(o.v, 2, 'The value should be 2');
});
