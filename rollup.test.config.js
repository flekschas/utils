import multi from '@rollup/plugin-multi-entry';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: [
    './tests/animation.js',
    './tests/array.js',
    './tests/casing.js',
    './tests/color.js',
    './tests/conversion.js',
    './tests/dom.js',
    './tests/format.js',
    './tests/functional-programming.js',
    './tests/geometry.js',
    './tests/map.js',
    './tests/math.js',
    './tests/object.js',
    './tests/sorting.js',
    './tests/string.js',
    './tests/timing.js',
    './tests/type-checking.js',
    './tests/vector.js',
  ],
  output: {
    name: 'test',
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [multi(), resolve({ ignoreSideEffectsForRoot: true }), commonjs()],
};
