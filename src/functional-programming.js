import { identity } from './math';
import { assign } from './object';
import { capitalize } from './string';

/**
 * Functional version of `Array.map()`
 *
 * @description
 * The pure map function is more powerful because it can be used on data types
 * other than Array too.
 *
 * @param {function} f - Mapping function
 * @return {array} Mapped array
 */
export const map = f => x => Array.prototype.map.call(x, f);

/**
 * Map and filter data in one iteration.
 *
 * Combining the loops is about 7-8x faster than
 *
 * @param   {function}  mapFn  Mapping function
 * @param   {function}  filterFn  Filter function
 * @return  {function}  A function that accepts a single array paremeter
 */
export const mapFilter = (mapFn, filterFn) =>
  /**
   * @param   {array}  arr  An array to be mapped and filtered
   * @returns {array}  The mapped and filtered array
   */
  arr => {
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
 * More flexible and applicable to other array-like data types.
 *
 * @param {function} f - Modifier function applied on every item of the array.
 * @return {array} Modified array-like variable.
 */
export const forEach = f => x => Array.prototype.forEach.call(x, f);

/**
 * Convenience function to compose functions
 * @param {...[function]} fns - Array of functions
 * @return {function} The composed function
 */
export const pipe = (...fns) =>
  /**
   * @param {*} x - Some value
   * @return {*} Output of the composed function
   */
  x => fns.reduce((y, f) => f(y), x);

/**
 * Functional version of `Array.forEach`. More flexible and applicable to
 *   other array-like data types like `NodeList`.
 * @param   {function}  f  Modifier function applied on every item of the
 *   array.
 * @return  {*}  Modified array-like variable.
 */
export const some = f => x => Array.prototype.some.call(x, f);

export const withConstructor = constructor => self =>
  assign(self, {
    __proto__: {
      constructor
    }
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
export const withProperty = (
  name,
  {
    initialValue = undefined,
    getter: customGetter,
    setter: customSetter,
    cloner = identity,
    transformer = identity,
    validator = () => true
  } = {}
) => self => {
  let value = initialValue;

  const getter = customGetter ? () => customGetter() : () => cloner(value);

  const setter = customSetter
    ? newValue => customSetter(newValue)
    : newValue => {
        const transformedNewValue = transformer(newValue);
        value = validator(transformedNewValue) ? transformedNewValue : value;
      };

  return assign(self, {
    get [name]() {
      return getter();
    },
    [`set${capitalize(name)}`](newValue) {
      setter(newValue);
    }
  });
};

/**
 * Assign a read-only property to an object
 * @param {string} name - Name of the property
 * @param {*} value - Static value
 */
export const withReadOnlyProperty = (name, value) => self =>
  assign(self, {
    get [name]() {
      return value;
    }
  });
