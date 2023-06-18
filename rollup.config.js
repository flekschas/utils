import { babel } from '@rollup/plugin-babel';
import json from '@rollup/plugin-json';
import terser from '@rollup/plugin-terser';

import pkg from './package.json';

const configurator = (
  input,
  file,
  format,
  plugins,
  extend = true,
  external = undefined
) => ({
  input,
  output: {
    name: 'utils',
    extend,
    format,
    file,
    banner: `// ${pkg.name} v${
      pkg.version
    } Copyright ${new Date().getFullYear()} ${pkg.author.name}`,
  },
  external,
  plugins,
});

const bundles = [
  ['index', 'utils', false, false],
  ['animation'],
  ['array'],
  ['casing'],
  ['color'],
  ['conversion'],
  ['dom'],
  ['event'],
  ['functional-programming'],
  ['geometry'],
  ['map'],
  ['math'],
  ['object'],
  ['other'],
  ['sorting'],
  ['string'],
  ['timing'],
  ['type-checking'],
  ['vector'],
];

const babelPlugin = babel({ babelHelpers: 'runtime' });

const convert = ([
  inputName,
  outputName = null,
  extend = true,
  subDir = true,
]) => {
  // eslint-disable-next-line no-param-reassign
  outputName = outputName === null ? inputName : outputName;

  return [
    // UMD
    configurator(
      `src/${inputName}.js`,
      `dist/${subDir ? 'umd/' : ''}${outputName}.js`,
      'umd',
      [json(), babelPlugin],
      extend,
      (id) => id.includes('@babel/runtime')
    ),

    // UMD minimized
    configurator(
      `src/${inputName}.js`,
      `dist/${subDir ? 'umd/' : ''}${outputName}.min.js`,
      'umd',
      [json(), babelPlugin, terser()],
      extend,
      (id) => id.includes('@babel/runtime')
    ),

    // ESM
    configurator(
      `src/${inputName}.js`,
      `dist/${subDir ? 'esm/' : ''}${outputName}${subDir ? '' : '.esm'}.js`,
      'esm',
      [json()],
      extend
    ),
  ];
};

export default bundles.flatMap(convert);
