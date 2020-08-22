export const assign = (target, ...sources) => {
  sources.forEach(source => {
    // eslint-disable-next-line no-shadow
    const descriptors = Object.keys(source).reduce((descriptors, key) => {
      descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
      return descriptors;
    }, {});

    // By default, Object.assign copies enumerable Symbols, too
    Object.getOwnPropertySymbols(source).forEach(symbol => {
      const descriptor = Object.getOwnPropertyDescriptor(source, symbol);
      if (descriptor.enumerable) {
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
 * @param {object} source - Object to be cloned.
 * @return {object} Cloned `source` object.
 */
export const deepClone = source => {
  let target;
  return extend(target, source);
};

/**
 * Extend an object with another object.
 *
 * @param {object} target - Target object or `undefined` if a new object should
 *   be created.
 * @param {object} source - Object to be cloned.
 * @return {object} Cloned `source` object
 */
export const extend = (target, source) => {
  if (source === null || typeof source !== 'object') {
    return source;
  }

  if (source.constructor !== Object && source.constructor !== Array) {
    return source;
  }

  if (
    source.constructor === Date ||
    source.constructor === RegExp ||
    source.constructor === Function ||
    source.constructor === String ||
    source.constructor === Number ||
    source.constructor === Boolean
  ) {
    return new source.constructor(source);
  }

  const out = target || new source.constructor();

  Object.keys(source).forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (typeof out[key] === 'undefined') {
      if (typeof descriptor.value === 'undefined') {
        Object.defineProperty(out, key, descriptor);
      } else {
        out[key] = extend(undefined, source[key]);
      }
    }
  });

  return out;
};

/**
 * Update the target object by the source object. Besides extending that target
 * object, properties that are not present in the source object.
 *
 * @param {object} target - Target object or `undefined` if a new object should
 *   be created.
 * @param {object} source - Object to be cloned.
 * @return {object} Cloned `source` object
 */
export const update = (target, source) => {
  // Return boolean, number, strings, and null
  if (source === null || typeof source !== 'object') {
    return source;
  }

  // Recreate special objects. Special objects are of type "object" but are not
  // simple arrays or objects, e.g.:
  // Date, RegExp, String, Number, Boolean, or Function
  if (source.constructor !== Object && source.constructor !== Array) {
    return new source.constructor(source);
  }

  const out = new target.constructor();

  // Update properties
  let updated = false;
  Object.keys(source).forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(source, key);
    if (target[key] === undefined) {
      // The `key` prop does not exist on `target` so we will extend `target`
      // with the `key` prop.
      if (typeof descriptor.value === 'undefined') {
        Object.defineProperty(out, key, descriptor);
      } else {
        out[key] = extend(undefined, source[key]);
      }
    } else {
      // The `key` prop exist on `target` so we update it.
      out[key] = update(target[key], source[key]);
    }
    updated = updated || out[key] !== target[key];
  });

  // In case no property was updated but some were removed `updated` needs to be
  // true
  updated =
    updated ||
    Object.keys(target).filter(key => typeof source[key] === 'undefined')
      .length;

  return updated ? out : target;
};
