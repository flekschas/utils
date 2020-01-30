/**
 * Store the values of an iterator in an array.
 *
 * This code is about 9x faster than `Array.from()`
 *
 * @param   {map}  map  The map whose keys are to be converted to an array
 * @return  {array}  The array with the map keys
 */
export const iteratorToArray = iterator => {
  const keys = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const value of iterator) {
    keys.push(value);
  }
  return keys;
};
