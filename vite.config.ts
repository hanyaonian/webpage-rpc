import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { version } from './package.json';

export default defineConfig(() => {
  process.env = { ...process.env, VITE_APP_VERSION: version };
  return {
    server: {
      open: '/demo/index.html?log=all',
    },
    build: {
      target: 'modules',
      minify: true,
      rollupOptions: {
        input: resolve(__dirname, 'src/index.ts'),
        output: {
          dir: 'dist',
          format: 'umd',
          name: 'PageRPC',
          entryFileNames: '[name].js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]'
        },
        /** @see link https://rollupjs.org/guide/en/#preserveentrysignatures */
        preserveEntrySignatures: 'strict',
        plugins: [
          typescript({ tsconfig: './tsconfig.json' }),
        ]
      }
    },
  }
})