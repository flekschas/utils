export const camelToConst = str =>
  str
    .split(/(?=[A-Z])/)
    .join('_')
    .toUpperCase();

export const capitalize = str => `${str[0].toUpperCase()}${str.substr(1)}`;

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
