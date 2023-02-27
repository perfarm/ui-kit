import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs',
    plugins: [terser()],
  },
  plugins: [
    resolve({
      moduleDirectories: ['node_modules'],
    }),
    commonjs(),
    typescript({ tsconfig: './tsconfig.json' }),
  ],
  external: ['react', 'axios'],
};
