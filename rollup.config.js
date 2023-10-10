import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import license from 'rollup-plugin-license';
import replace from '@rollup/plugin-replace';

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
    {
      file: 'projects/expressjs/public/dist/routemamba.min.js',
      format: 'umd',
      name: 'routemamba',
      exports: 'auto',
      plugins: [terser()],
    },
    {
      file: 'projects/golang/public/dist/routemamba.min.js',
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
    replace({
      preventAssignment: true,
      'process.env.VERSION': JSON.stringify(require('./package.json').version),
      'process.env.BUILD_DATE': () => JSON.stringify(new Date()),
      __buildDate__: () => JSON.stringify(new Date()),
    }),
  ],
};
