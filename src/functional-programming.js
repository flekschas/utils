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

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

/**
 * Functional version of `Array.forEach`. More flexible and applicable to
 *   other array-like data types like `NodeList`.
 * @param   {function}  f  Modifier function applied on every item of the
 *   array.
 * @return  {*}  Modified array-like variable.
 */
export const some = f => x => Array.prototype.some.call(x, f);
