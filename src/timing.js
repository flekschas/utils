/**
 * Debounce a function call.
 *
 * @description
 * Function calls are delayed by `wait` milliseconds and only one out of
 * multiple function calls is executed.
 *
 * @param {function} fn - Function to be debounced
 * @param {number} wait - Number of milliseconds to debounce the function call.
 * @return {function} Debounced function
 */
export const debounce = (fn, wait) => {
  let timeout;

  const debounced = (...args) => {
    const later = () => {
      timeout = null;
      fn(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };

  debounced.cancel = () => {
    clearTimeout(timeout);
  };

  debounced.now = (...args) => fn(...args);

  return debounced;
};

/**
 * Get a promise that resolves after the next `n` animation frames
 * @param {number} n - Number of animation frames to wait
 * @return {Promise} A promise that resolves after the next `n` animation frames
 */
export const nextAnimationFrame = (n = 1) =>
  new Promise(resolve => {
    let i = 0;

    const raf = () =>
      requestAnimationFrame(() => {
        i++;
        if (i < n) raf();
        else resolve();
      });

    raf();
  });

/**
 * Throttle a function
 *
 * @description
 * A throttled function will only ever be called every `wait` milliseconds at
 * most.
 *
 * @param {function} fn - Function to be throttled
 * @param {number} wait - Number of milliseconds calls are throttled
 * @return {function} Throttled function
 */
export const throttle = (fn, wait) => {
  let isWaiting = false;

  const throttled = (...args) => {
    if (!isWaiting) {
      fn(...args);

      isWaiting = true;

      setTimeout(() => {
        isWaiting = false;
      }, wait);
    }
  };

  throttled.reset = () => {
    isWaiting = false;
  };

  throttled.now = (...args) => fn(...args);

  return throttled;
};

/**
 * Throttle and debounce a function call
 *
 * Throttling a function call means that the function is called at most every
 * `interval` milliseconds no matter how frequently you trigger a call.
 * Debouncing a function call means that the function is called the earliest
 * after `finalWait` milliseconds wait time where the function was not called.
 * Combining the two ensures that the function is called at most every
 * `interval` milliseconds and is ensured to be called with the very latest
 * arguments after after `finalWait` milliseconds wait time at the end.
 *
 * The following imaginary scenario describes the behavior:
 *
 * MS | throttleTime=3 and debounceTime=3
 * 1. y(f, 3, 3)(args1) => f(args1) called
 * 2. y(f, 3, 3)(args2) => call ignored due to throttling
 * 3. y(f, 3, 3)(args3) => call ignored due to throttling
 * 4. y(f, 3, 3)(args4) => f(args4) called
 * 5. y(f, 3, 3)(args5) => all ignored due to throttling
 * 6. No call           => nothing
 * 7. No call           => f(args5) called due to debouncing
 *
 * @param {functon} func - Function to be throttled and debounced
 * @param {number} interval - Throttle intevals in milliseconds
 * @param {number} wait - Debounce wait time in milliseconds By default this is
 *   the same as `interval`.
 * @return {function} - Throttled and debounced function
 */
export const throttleAndDebounce = (fn, throttleTime, debounceTime = null) => {
  let timeout;
  let blockedCalls = 0;

  // eslint-disable-next-line no-param-reassign
  debounceTime = debounceTime === null ? throttleTime : debounceTime;

  const debounced = (...args) => {
    const later = () => {
      // Since we throttle and debounce we should check whether there were
      // actually multiple attempts to call this function after the most recent
      // throttled call. If there were no more calls we don't have to call
      // the function again.
      if (blockedCalls > 0) {
        fn(...args);
        blockedCalls = 0;
      }
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, debounceTime);
  };

  let isWaiting = false;
  const throttledAndDebounced = (...args) => {
    if (!isWaiting) {
      fn(...args);
      debounced(...args);

      isWaiting = true;
      blockedCalls = 0;

      setTimeout(() => {
        isWaiting = false;
      }, throttleTime);
    } else {
      blockedCalls++;
      debounced(...args);
    }
  };

  throttledAndDebounced.reset = () => {
    isWaiting = false;
  };

  throttledAndDebounced.cancel = () => {
    clearTimeout(timeout);
  };

  throttledAndDebounced.now = (...args) => fn(...args);

  return throttledAndDebounced;
};

/**
 * Promise that resolves after some time
 * @param {number} msec - Time in milliseconds until the promise is resolved
 * @return {Promise} Promise resolving after `msec` milliseconds
 */
export const wait = msec => new Promise(resolve => setTimeout(resolve, msec));
