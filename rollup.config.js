import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import external from 'rollup-plugin-peer-deps-external';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';

import pkg from './package.json';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default [
  {
    input: 'src/index.js',
    watch: true,
    output: [{
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    }, {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
    }],
    plugins: [
      external(),
      babel({
        exclude: 'node_modules/**',
        presets: ['@babel/env', '@babel/preset-react'],
      }),
      resolve({ extensions }),
      json({
        // exclude: ['node_modules/**'],
        namedExports: true,
        compact: true,
        preferConst: true,
      }),
      commonjs(),
      nodePolyfills(),
    ],
  },
];
