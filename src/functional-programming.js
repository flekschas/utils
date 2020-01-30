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

export const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);
