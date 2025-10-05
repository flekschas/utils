/**
 * Assign properties, constructors, etc. to an object
 *
 * @param target - The target object that gets `sources` assigned to it
 * @param sources - The sources to be assigned to the target object
 * @return An object representing the union of the target and sources objects
 */
export const assign = (target: object, ...sources: object[]) => {
	sources.forEach((source) => {
		// eslint-disable-next-line no-shadow
		const descriptors = Object.keys(source).reduce(
			(
				descriptors: Record<string | symbol, PropertyDescriptor>,
				key: string,
			) => {
				descriptors[key] = Object.getOwnPropertyDescriptor(
					source,
					key,
				) as PropertyDescriptor;
				return descriptors;
			},
			{},
		);

		// By default, Object.assign copies enumerable Symbols, too
		Object.getOwnPropertySymbols(source).forEach((symbol) => {
			const descriptor = Object.getOwnPropertyDescriptor(source, symbol);
			if (descriptor?.enumerable) {
				descriptors[symbol] = descriptor;
			}
		});
		Object.defineProperties(target, descriptors);
	});
	return target;
};

/**
 * Deep clone an object.
 *
 * @param source - Object to be cloned.
 * @return Cloned `source` object.
 */
export const deepClone = (source: object): object => extend(undefined, source);

/**
 * Extend an object with another object.
 *
 * @param target - Target object or `undefined` if a new object should
 *   be created.
 * @param source - Object to be cloned.
 * @return Cloned `source` object
 */
export const extend = (target: object | undefined, source: object): object => {
	if (source === null || typeof source !== "object") {
		return source;
	}

	// Recreate special objects. Special objects are of type "object" but are not
	// simple arrays or objects, e.g.:
	// Date, RegExp, String, Number, Boolean, or Function
	if (source.constructor !== Object && source.constructor !== Array) {
		// biome-ignore lint/suspicious/noExplicitAny: We know this constructor is valid from runtime check
		return new (source.constructor as any)(source);
	}

	const out =
		target ||
		// biome-ignore lint/suspicious/noExplicitAny: We now know that the constructor is either Object or Array
		(new (source.constructor as any)() as
			| Record<string, unknown>
			| Array<unknown>);

	Object.keys(source).forEach((key) => {
		const descriptor = Object.getOwnPropertyDescriptor(source, key);
		if (!descriptor) return;
		if (!(key in out)) {
			if (typeof descriptor?.value === "undefined") {
				// It's an accessor (getter/setter) - copy the whole descriptor
				Object.defineProperty(out, key, descriptor);
			} else {
				// It's a data property - recursively extend the value
				// biome-ignore lint/suspicious/noExplicitAny: We know this is safe
				(out as any)[key] = extend(
					undefined,
					source[key as keyof typeof source],
				);
			}
		}
	});

	return out;
};

/**
 * Update the target object by the source object. Besides extending that target
 * object, properties that are not present in the source object.
 *
 * @param target - Target object
 *   be created.
 * @param source - Object to be cloned.
 * @return Cloned `source` object
 */
export const update = (target: object, source: object): object => {
	// Return boolean, number, strings, and null
	if (source === null || typeof source !== "object") {
		return source;
	}

	// Recreate special objects. Special objects are of type "object" but are not
	// simple arrays or objects, e.g.:
	// Date, RegExp, String, Number, Boolean, or Function
	if (source.constructor !== Object && source.constructor !== Array) {
		// biome-ignore lint/suspicious/noExplicitAny: We know this constructor is valid from runtime check
		return new (source.constructor as any)(source);
	}

	// biome-ignore lint/suspicious/noExplicitAny: We know this constructor is valid from runtime check
	const out = new (target.constructor as any)() as
		| Record<string, unknown>
		| Array<unknown>;

	// Update properties
	let updated = false;
	Object.keys(source).forEach((key) => {
		const descriptor = Object.getOwnPropertyDescriptor(source, key);
		if (!(key in target)) {
			// The `key` prop does not exist on `target` so we will extend `target`
			// with the `key` prop.
			if (typeof descriptor?.value === "undefined") {
				if (descriptor) {
					Object.defineProperty(out, key, descriptor);
				}
			} else {
				// biome-ignore lint/suspicious/noExplicitAny: We know this is safe
				(out as any)[key] = extend(
					undefined,
					source[key as keyof typeof source],
				);
			}
		} else {
			// The `key` prop exist on `target` so we update it.
			// biome-ignore lint/suspicious/noExplicitAny: We know this is safe
			(out as any)[key] = update(
				target[key as keyof typeof target],
				source[key as keyof typeof source],
			);
		}
		updated =
			updated ||
			out[key as keyof typeof out] !== target[key as keyof typeof target];
	});

	// In case no property was updated but some were removed `updated` needs to be
	// true
	updated =
		updated ||
		!!Object.keys(target).filter(
			(key) => typeof source[key as keyof typeof source] === "undefined",
		).length;

	return updated ? out : target;
};

/**
 * Invert an object by swapping its keys and values.
 *
 * @example
 * ```js
 * invert({ a: 'cool', b: 'sweet' });
 * // => { cool: 'a', sweet: 'b' }
 * ```
 *
 * @param obj - The object to be inverted.
 * @return Inverted object
 */
export const invert = (
	obj: Record<string, string | number>,
): Record<string, string> =>
	Object.keys(obj).reduce((invertedObj: Record<string, string>, key) => {
		invertedObj[obj[key]] = key;
		return invertedObj;
	}, {});
