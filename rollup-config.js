// Rollup configuration for the full build
// See https://github.com/openlayers/openlayers/issues/8330#issuecomment-415315182

import noderesolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';

export default {
  input: 'build/index.js',
  output: [{file: 'build/ol-debug.js', format: 'iife'}],
  plugins: [noderesolve(), commonjs(), buble()]
};
