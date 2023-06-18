import { identity } from './math';
import { assign } from './object';
import { capitalize } from './casing';

/**
 * Functional version of `Array.map()`
 *
 * @description
 * The pure map function is more powerful because it can be used on data types
 * other than Array too.
 *
 * @type {<I extends Iterable<T>, S>(f: (value: T) => S) => (x: I) => S[]}
 * @param {function} f - Mapping function
 * @return {array} Mapped array
 */
export const map = (f) => (x) => Array.prototype.map.call(x, f);

/**
 * Map and filter data in one iteration.
 *
 * Combining the loops is about 7-8x faster than
 *
 * @param {function} mapFn - Mapping function
 * @param {function} filterFn - Filter function
 * @return {function} A function that accepts a single array paremeter
 */
export const mapFilter =
  (mapFn, filterFn) =>
  /**
   * @param   {array}  arr  An array to be mapped and filtered
   * @returns {array}  The mapped and filtered array
   */
  (arr) => {
    const out = [];
    // loop though array
    for (let i = 0; i < arr.length; i++) {
      const result = mapFn(arr[i], i);
      if (filterFn(result, out.length)) out.push(result);
    }
    return out;
  };

/**
 * Functional version of `Array.forEach`
 *
 * @description
 * More flexible and applicable to other array-like data types like `NodeList`.
 *
 * @type {<I extends Iterable<T>>(f: (value: T) => void) => (x: I) => void}
 * @param {function} f - Callback function applied on every item of the array.
 * @return {array} Modified array-like variable.
 */
export const forEach = (f) => (x) => Array.prototype.forEach.call(x, f);

/**
 * Convenience function to compose functions
 * @param {...function} fns - Array of functions
 * @return {function} The composed function
 */
export const pipe =
  (...fns) =>
  /**
   * @param {*} x - Some value
   * @return {*} Output of the composed function
   */
  (x) =>
    fns.reduce((y, f) => f(y), x);

/**
 * Functional version of `Array.some`. More flexible and applicable to
 * other array-like data types like `NodeList`.
 *
 * @type {<I extends Iterable<T>>(f: (value: T) => Boolean) => (x: I) => Boolean}
 * @param {function} f - Function applied on every item of the array.
 * @return {Boolean} Returns `true` when `f()` evaluates to `true` on at least
 *   one element of the array-like
 */
export const some = (f) => (x) => Array.prototype.some.call(x, f);

/**
 * Assign a constructor to the object
 * @param {function} constructor - Constructor functions
 */
export const withConstructor = (constructor) => (self) =>
  assign(
    {
      __proto__: {
        constructor,
      },
    },
    self
  );

/**
 * Forward a method call
 * @param {string} name - Exposed function name
 * @param {function} fn - Function to be forwarded
 */
export const withForwardedMethod = (name, fn) => (self) =>
  assign(self, {
    [name](...args) {
      return fn.apply(this, args);
    },
  });

/**
 * Assign a property to an object
 * @param {string} name - Name of the property
 * @param {object} options - Option object
 * @param {*} options.initialValue - Initial value of the property
 * @param {function} options.getter - Custom getter
 * @param {function} options.setter - Custom setter
 * @param {function} options.cloner - Clone function. Used before the value
 *   is returned.
 * @param {function} options.transformer - Value transformer. Used before a new
 *   value is set.
 * @param {function} options.validator - Validator function decides whether the
 *   new and transformed value is set or not.
 */
export const withProperty =
  (
    name,
    {
      initialValue = undefined,
      getter: customGetter,
      setter: customSetter,
      cloner = identity,
      transformer = identity,
      validator = () => true,
    } = {}
  ) =>
  (self) => {
    let value = initialValue;

    const getter = customGetter ? () => customGetter() : () => cloner(value);

    const setter = customSetter
      ? (newValue) => customSetter(newValue)
      : (newValue) => {
          const transformedNewValue = transformer(newValue);
          value = validator(transformedNewValue) ? transformedNewValue : value;
        };

    return assign(self, {
      get [name]() {
        return getter();
      },
      [`set${capitalize(name)}`](newValue) {
        setter(newValue);
      },
    });
  };

/**
 * Assign a read-only property to an object
 * @param {string} name - Name of the property
 * @param {function} getter - Getter function
 */
export const withReadOnlyProperty = (name, getter) => (self) =>
  assign(self, {
    get [name]() {
      return getter();
    },
  });

/**
 * Assign a static property to an object
 * @param {string} name - Name of the property
 * @param {*} value - Static value
 */
export const withStaticProperty = (name, value) => (self) =>
  assign(self, {
    get [name]() {
      return value;
    },
  });
