/**
 * Find the nth instance of the query string
 * @param str - String to search across
 * @param query - String to search for
 * @param n - nth instance
 * @return Index of the nth query string or -1
 */
export const nthIndexOf = (str: string, query: string, n = 0): number => {
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
 * @param length - Length of the random string
 * @param alphabet - Possible characters
 * @return Random string
 */
export const randomString = (
	length: number,
	alphabet = "abcdefghijklmnopqrstuvwxyz",
): string =>
	Array.from({ length }, () =>
		alphabet.charAt(Math.floor(Math.random() * alphabet.length)),
	).join("");
