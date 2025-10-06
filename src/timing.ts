type Function<T extends unknown[] = unknown[], S = unknown> = (...args: T) => S;
type DebouncedFunction<
	Input extends unknown[] = unknown[],
	Output = unknown,
> = {
	(...args: Input): void;
	cancel: () => void;
	now: (...args: Input) => Output;
};

/**
 * Debounce a function call.
 *
 * @description
 * Function calls are delayed by `wait` milliseconds and only one out of
 * multiple function calls is executed.
 *
 * @param fn - Function to be debounced
 * @param wait - Number of milliseconds to debounce the function call.
 * @return Debounced function
 */
export const debounce = <Input extends unknown[] = unknown[], Output = unknown>(
	fn: Function<Input, Output>,
	wait: number,
): DebouncedFunction<Input, Output> => {
	let timeout: number | undefined;

	const debounced = (...args: Input) => {
		const later = () => {
			timeout = undefined;
			fn(...args);
		};

		clearTimeout(timeout);
		timeout = setTimeout(later, wait) as unknown as number;
	};

	debounced.cancel = () => {
		clearTimeout(timeout);
	};

	debounced.now = (...args: Input) => fn(...args);

	return debounced;
};

/**
 * Get a promise that resolves after the next `n` animation frames
 * @param n - Number of animation frames to wait
 * @return A promise that resolves after the next `n` animation frames
 */
export const nextAnimationFrame = (n = 1): Promise<void> =>
	new Promise((resolve) => {
		let i = 0;

		const raf = () =>
			requestAnimationFrame(() => {
				i++;
				if (i < n) raf();
				else resolve(undefined);
			});

		raf();
	});

type ThrottledFunction<
	Input extends unknown[] = unknown[],
	Output = unknown,
> = {
	(...args: Input): void;
	reset: () => void;
	now: (...args: Input) => Output;
};

/**
 * Throttle a function
 *
 * @description
 * A throttled function will only ever be called every `wait` milliseconds at
 * most.
 *
 * @param fn - Function to be throttled
 * @param wait - Number of milliseconds calls are throttled
 * @return Throttled function
 */
export const throttle = <Input extends unknown[] = unknown[], Output = unknown>(
	fn: Function<Input, Output>,
	wait: number,
): ThrottledFunction<Input, Output> => {
	let isWaiting = false;

	const throttled = (...args: Input) => {
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

	throttled.now = (...args: Input) => fn(...args);

	return throttled;
};

type ThrottledAndDebouncedFunction<
	Input extends unknown[] = unknown[],
	Output = unknown,
> = {
	(...args: Input): void;
	reset: () => void;
	cancel: () => void;
	now: (...args: Input) => Output;
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
 * @param fn - Function to be throttled and debounced
 * @param throttleTime - Throttle intevals in milliseconds
 * @param debounceTime - Debounce wait time in milliseconds. By default this is
 *   the same as `throttleTime`.
 * @return Throttled and debounced function
 */
export const throttleAndDebounce = <
	Input extends unknown[] = unknown[],
	Output = unknown,
>(
	fn: Function<Input, Output>,
	throttleTime: number,
	debounceTime?: number,
): ThrottledAndDebouncedFunction<Input, Output> => {
	let timeout: number | undefined;
	let blockedCalls = 0;

	debounceTime = debounceTime === null ? throttleTime : debounceTime;

	const debounced = (...args: Input) => {
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
		timeout = setTimeout(later, debounceTime) as unknown as number;
	};

	let isWaiting = false;
	const throttledAndDebounced = (...args: Input) => {
		if (isWaiting) {
			blockedCalls++;
			debounced(...args);
		} else {
			fn(...args);
			debounced(...args);

			isWaiting = true;
			blockedCalls = 0;

			setTimeout(() => {
				isWaiting = false;
			}, throttleTime);
		}
	};

	throttledAndDebounced.reset = () => {
		isWaiting = false;
	};

	throttledAndDebounced.cancel = () => {
		clearTimeout(timeout);
	};

	throttledAndDebounced.now = (...args: Input) => fn(...args);

	return throttledAndDebounced;
};

/**
 * Promise that resolves after some time
 * @param msec - Time in milliseconds until the promise is resolved
 * @return Promise resolving after `msec` milliseconds
 */
export const wait = (msec: number): Promise<void> =>
	new Promise((resolve) => {
		setTimeout(resolve, msec);
	});

/**
 * Synonym for `wait()` because `await timeout(250)` reads nicer
 */
export const timeout = wait;
