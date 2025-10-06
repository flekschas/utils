/**
 * Get a D3 Format specifier given the data domain
 * @param domain - The domain of the data to be formatted
 * @return A D3 Format specifier that fits the data extent
 */
export const getD3FormatSpecifier = (domain: number[]): string => {
	const extent = domain[1] - domain[0];
	if (extent <= 0) return ",.3~r";

	const log = Math.log10(extent);
	const sign = Math.sign(log);
	const numDigits = Math.round(Math.abs(log) + Number(Number.isInteger(log)));

	if (Number.isNaN(numDigits)) return ",.3~r";

	if (sign <= 0) return `.${Math.max(3, numDigits + 1)}~f`;

	const logMax = Math.log10(Math.max(extent, Math.abs(domain[1])));
	const numDigitsMax = Math.round(
		Math.abs(logMax) + Number(Number.isInteger(logMax)),
	);

	if (numDigitsMax > 4) return ".3~s";
	if (Number.isNaN(numDigitsMax)) return ",.3~r";

	return `,.${Math.max(3, Math.max(numDigits, numDigitsMax))}~r`;
};
