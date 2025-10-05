/**
 * Create a worker from a function
 * @param fn - Function to be turned into a worker
 * @return Worker function
 */
export const createWorker = (fn: () => void): Worker =>
	new Worker(
		window.URL.createObjectURL(
			new Blob([`(${fn.toString()})()`], { type: "text/javascript" }),
		),
	);

/**
 * An adventure into the void!
 * @return The explorers find nothing but void.
 */
export const toVoid = (): void => {};

/**
 * Synonym for `toVoid()` because it's a convention
 */
export const noop = toVoid;
