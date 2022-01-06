/** @format */

import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@fe6/icon-vue',
        replacement: path.resolve(__dirname, '../../vue/src/index.ts'),
      },
      {
        find: 'icon-vue-keg',
        replacement: path.resolve(__dirname, '../../vue/src/all.ts'),
      },
      {
        find: 'icon.less',
        replacement: path.resolve(
          __dirname,
          '../../vue/src/runtime/index.less',
        ),
      },
      {
        find: '@fe6/icon-img',
        replacement: path.resolve(__dirname, '../../img/src/index.ts'),
      },
      {
        find: '@fe6/icon-cube-vue',
        replacement: path.resolve(__dirname, '../../cube-vue/src/index.ts'),
      },
      {
        find: '@fe6/icons.json',
        replacement: path.resolve(__dirname, '../../cube-vue/icons.json'),
      },
      {
        find: 'img-icon.less',
        replacement: path.resolve(
          __dirname,
          '../../img/src/runtime/index.less',
        ),
      },
    ],
  },
  plugins: [
    jsx({
      include: [/\.tesx$/, /\.[jt]sx$/],
    }),
    vue(),
  ],
});
