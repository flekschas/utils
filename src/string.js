export const camelToConst = str =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

export const capitalize = str => `${str[0].toUpperCase()}${str.substr(1)}`;

/**
 * FInd the nth instance of the query string
 * @param   {string}  str  String to search across
 * @param   {string}  query  String to search for
 * @param   {number}  n  nth instance
 * @return  {number}  Index of the nth query string or -1
 */
export const nthIndexOf = (str, query, n = 0) => {
  let i = 0;
  let idx = str.indexOf(query);
  while (i < n && idx >= 0) {
    idx = str.indexOf(query, idx + 1);
    i++;
  }
  return idx;
};

/**
 * Create a random string from some alphabet
 * @param {number} length - Length of the random string
 * @param {string} alphabet - Possible characters
 * @return {string} Random string
 */
export const randomString = (length, alphabet = 'abcdefghijklmnopqrstuvwxyz') =>
  Array(length)
    .join()
    .split(',')
    .map(() => alphabet.charAt(Math.floor(Math.random() * alphabet.length)))
    .join('');
