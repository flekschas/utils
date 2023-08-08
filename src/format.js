/**
 * Get a D3 Format specifier given the data domain
 * @param {number[]} domain - The domain of the data to be formatted
 * @return {string} A D3 Format specifier that fits the data extent
 */
export const getD3FormatSpecifier = (domain) => {
  const extent = domain[1] - domain[0];
  if (extent <= 0) return '';

  const log = Math.log10(extent);
  const sign = Math.sign(log);
  const numDigits = Math.round(Math.abs(log) + Number.isInteger(log));

  if (sign < 0) return `.${numDigits + 1}~f`;

  const logMax = Math.log10(domain[1]);
  const numDigitsMax = Math.round(Math.abs(logMax) + Number.isInteger(logMax));

  if (numDigitsMax > 4) return `.3~s`;

  return `,.${Math.max(3, Math.max(numDigits, numDigitsMax))}~r`;
};
