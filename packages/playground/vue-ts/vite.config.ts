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
        find: 'icon.less',
        replacement: path.resolve(
          __dirname,
          '../../vue/src/runtime/index.less',
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
