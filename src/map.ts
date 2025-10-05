/**
 * Merge two maps
 * @param map1 - The first map to be merged
 * @param map2 - The second map to be merged
 * @return A map with the entries of both maps
 */
export const mergeMaps = <T1, T2, T3 = T1, T4 = T2>(
	map1: Map<T1, T2>,
	map2: Map<T3, T4>,
): Map<T1 | T3, T2 | T4> =>
	new Map(
		(function* merge() {
			yield* map1;
			yield* map2;
		})() as Iterable<[T1 | T3, T2 | T4]>,
	);
