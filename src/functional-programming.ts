import { capitalize } from "./casing";
import { identity } from "./math";
import { assign } from "./object";

/**
 * Functional version of `Array.map()`
 *
 * @description
 * The pure map function is more powerful because it can be used on data types
 * other than Array too.
 *
 * @param f - Mapping function
 * @return Mapped array
 */
export const map =
	<T, I extends Iterable<T>, S>(f: (value: T) => S) =>
	(x: I): S[] =>
		Array.prototype.map.call(x, f) as S[];

/**
 * Map and filter data in one iteration.
 *
 * Combining the loops is about 7-8x faster than
 *
 * @param mapFn - Mapping function
 * @param filterFn - Filter function
 * @return A function that accepts a single array paremeter
 */
export const mapFilter =
	<Input, Output>(
		mapFn: (value: Input, index: number) => Output,
		filterFn: (value: Output, index: number) => boolean,
	) =>
	/**
	 * @param arr - An array to be mapped and filtered
	 * @returns The mapped and filtered array
	 */
	(arr: Input[]): Output[] => {
		const out: Output[] = [];
		// loop though array
		for (let i = 0; i < arr.length; i++) {
			const result = mapFn(arr[i], i);
			if (filterFn(result, out.length)) out.push(result);
		}
		return out;
	};

/**
 * Functional version of `Array.forEach`
 *
 * @description
 * More flexible and applicable to other array-like data types like `NodeList`.
 *
 * @param f - Callback function applied on every item of the array.
 * @return Modified array-like variable.
 */
export const forEach =
	<T, I extends Iterable<T>>(f: (value: T) => void) =>
	(x: I): void =>
		Array.prototype.forEach.call(x, f);

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @return The composed function
 */
export function pipe<A, B>(fn1: (a: A) => B): (x: A) => B;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @return The composed function
 */
export function pipe<A, B, C>(fn1: (a: A) => B, fn2: (b: B) => C): (x: A) => C;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @return The composed function
 */
export function pipe<A, B, C, D>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
): (x: A) => D;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
): (x: A) => E;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
): (x: A) => F;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @param fn6 - Sixth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F, G>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
	fn6: (f: F) => G,
): (x: A) => G;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @param fn6 - Sixth function
 * @param fn7 - Seventh function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F, G, H>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
	fn6: (f: F) => G,
	fn7: (g: G) => H,
): (x: A) => H;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @param fn6 - Sixth function
 * @param fn7 - Seventh function
 * @param fn8 - Eighth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F, G, H, I>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
	fn6: (f: F) => G,
	fn7: (g: G) => H,
	fn8: (h: H) => I,
): (x: A) => I;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @param fn6 - Sixth function
 * @param fn7 - Seventh function
 * @param fn8 - Eighth function
 * @param fn9 - Ninth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F, G, H, I, J>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
	fn6: (f: F) => G,
	fn7: (g: G) => H,
	fn8: (h: H) => I,
	fn9: (i: I) => J,
): (x: A) => J;

/**
 * Convenience function to compose functions
 * @param fn1 - First function
 * @param fn2 - Second function
 * @param fn3 - Third function
 * @param fn4 - Fourth function
 * @param fn5 - Fifth function
 * @param fn6 - Sixth function
 * @param fn7 - Seventh function
 * @param fn8 - Eighth function
 * @param fn9 - Ninth function
 * @param fn10 - Tenth function
 * @return The composed function
 */
export function pipe<A, B, C, D, E, F, G, H, I, J, K>(
	fn1: (a: A) => B,
	fn2: (b: B) => C,
	fn3: (c: C) => D,
	fn4: (d: D) => E,
	fn5: (e: E) => F,
	fn6: (f: F) => G,
	fn7: (g: G) => H,
	fn8: (h: H) => I,
	fn9: (i: I) => J,
	fn10: (j: J) => K,
): (x: A) => K;

/**
 * Convenience function to compose functions
 * @param fns - Array of functions
 * @return The composed function
 */
export function pipe(
	...fns: ((x: unknown) => unknown)[]
): (x: unknown) => unknown {
	return (x: unknown): unknown => fns.reduce((y, f) => f(y), x);
}

/**
 * Functional version of `Array.some`. More flexible and applicable to
 * other array-like data types like `NodeList`.
 *
 * @param f - Function applied on every item of the array.
 * @return Returns `true` when `f()` evaluates to `true` on at least
 *   one element of the array-like
 */
export const some =
	<T, I extends Iterable<T>>(f: (value: T) => boolean) =>
	(x: I): boolean =>
		Array.prototype.some.call(x, f);

/**
 * Assign a constructor to the object
 * @param constructorFn - Constructor functions
 */
export const withConstructor =
	<T extends {}>(constructorFn: new (...args: unknown[]) => T) =>
	(self: T) =>
		assign(
			{
				__proto__: {
					constructor: constructorFn,
				},
			},
			self,
		);

/**
 * Forward a method call
 * @param name - Exposed function name
 * @param fn - Function to be forwarded
 */
export const withForwardedMethod =
	<T extends {}>(name: string, fn: (...args: unknown[]) => unknown) =>
	(self: T) =>
		assign(self, {
			[name](...args: unknown[]) {
				return fn.apply(this, args);
			},
		});

/**
 * Assign a property to an object
 * @param name - Name of the property
 * @param  options - Option object
 * @param options.initialValue - Initial value of the property
 * @param options.getter - Custom getter
 * @param options.setter - Custom setter
 * @param options.cloner - Clone function. Used before the value
 *   is returned.
 * @param options.transformer - Value transformer. Used before a new
 *   value is set.
 * @param options.validator - Validator function decides whether the
 *   new and transformed value is set or not.
 */
export const withProperty =
	<T, S extends {}>(
		name: string,
		{
			initialValue = undefined,
			getter: customGetter,
			setter: customSetter,
			cloner = identity,
			transformer = identity,
			validator = () => true,
		}: Partial<{
			initialValue: T | undefined;
			getter: (() => T) | undefined;
			setter: ((newValue: T) => void) | undefined;
			cloner: ((x: T) => T) | undefined;
			transformer: ((x: T) => T) | undefined;
			validator: ((x: T) => boolean) | undefined;
		}> = {},
	) =>
	(self: S) => {
		let value: T | undefined = initialValue;

		const getter = customGetter
			? () => customGetter()
			: () => (value === undefined ? undefined : cloner(value));

		const setter = customSetter
			? (newValue: T) => customSetter(newValue)
			: (newValue: T) => {
					const transformedNewValue = transformer(newValue);
					value = validator(transformedNewValue) ? transformedNewValue : value;
				};

		return assign(self, {
			get [name]() {
				return getter();
			},
			[`set${capitalize(name)}`](newValue: T) {
				setter(newValue);
			},
		});
	};

/**
 * Assign a read-only property to an object
 * @param name - Name of the property
 * @param getter - Getter function
 */
export const withReadOnlyProperty =
	<T, S extends {}>(name: string, getter: () => T) =>
	(self: S) =>
		assign(self, {
			get [name]() {
				return getter();
			},
		});

/**
 * Assign a static property to an object
 * @param name - Name of the property
 * @param value - Static value
 */
export const withStaticProperty =
	<T, S extends {}>(name: string, value: T) =>
	(self: S) =>
		assign(self, {
			get [name]() {
				return value;
			},
		});
