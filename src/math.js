/**
 * Fast version of `Math.max`. Based on
 *   https://jsperf.com/math-min-max-vs-ternary-vs-if/24 `Math.max` is not
 *   very fast
 * @param   {number}  a  Value A
 * @param   {number}  b  Value B
 * @return  {boolean}  If `true` A is greater than B.
 */
export const max = (a, b) => (a > b ? a : b);

/**
 * Non-negative modulo function. E.g., `mod(-1, 5) === 4` while `-1 % 5 === -1`.
 *
 * @param {number} x - Dividend
 * @param {number} y - Divisor
 * @return {number} Remainder
 */
export const mod = (x, y) => ((x % y) + x) % y;

/**
 * Fast version of `Math.min`. Based on
 *   https://jsperf.com/math-min-max-vs-ternary-vs-if/24 `Math.max` is not
 *   very fast
 * @param   {number}  a  Value A
 * @param   {number}  b  Value B
 * @return  {boolean}  If `true` A is smaller than B.
 */
export const min = (a, b) => (a < b ? a : b);

export const sumAggregator = values => values.reduce((s, v) => s + v, 0);

export const meanAggregator = values => sumAggregator(values) / values.length;

export const maxAggregator = array => array.reduce(max, -Infinity);

export const minAggregator = array => array.reduce(min, Infinity);
