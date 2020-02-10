import multi from '@rollup/plugin-multi-entry';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: [
    './tests/animation.js',
    './tests/array.js',
    './tests/dom.js',
    './tests/geometry.js',
    './tests/timing.js',
    './tests/vector.js'
  ],
  output: {
    name: 'test',
    format: 'iife',
    sourcemap: 'inline'
  },
  plugins: [multi(), resolve(), commonjs(), babel()]
};
