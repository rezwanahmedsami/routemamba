import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';

export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/routemamba.js',
      format: 'umd',
      exports: 'auto',
      name: 'routemamba',
    },
    {
      file: 'dist/routemamba.min.js',
      format: 'umd',
      name: 'routemamba',
      exports: 'auto',
      plugins: [terser()],
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    json(),
    typescript({
      tsconfig: './tsconfig.json',
    }),
    license({
      banner: {
        content: { file: 'LICENSE' },
      },
    }),
  ],
};
