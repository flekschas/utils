/**
 * Test if an object is a function
 * @param {object} obj - Object to be tested
 * @return {boolean} If `true` the object is a function.
 */
export const isFunction = obj =>
  !!(obj && obj.constructor && obj.call && obj.apply);
