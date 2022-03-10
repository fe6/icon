/** @format */

import { createApp } from 'vue';
import App from './App.vue';

import { iconKegInstall } from '@fe6/icon-vue';

// icon 的样式
import 'icon.less';

const app = createApp(App);

iconKegInstall(app, 'i');
// 全局注册 vue icon
// iconKegInstall(app); // 默认是 icon 前缀

app.mount('#app');
