/**
 * Create a worker from a function
 * @param {function} fn - Function to be turned into a worker
 * @return {Worker} Worker function
 */
export const createWorker = (fn) =>
  new Worker(
    window.URL.createObjectURL(
      new Blob([`(${fn.toString()})()`], { type: 'text/javascript' })
    )
  );

/**
 * An adventure into the void!
 * @return {void} The explorers find nothing but void.
 */
export const toVoid = () => {};

/**
 * Synonym for `toVoid()` because it's a convention
 */
export const noop = toVoid;
