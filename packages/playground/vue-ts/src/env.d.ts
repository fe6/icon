/** @format */

/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module '@fe6/icon-vue';
declare module '@fe6/icon-img';
declare module '@fe6/icon-cube-vue';
declare module '@fe6/icons.json';
