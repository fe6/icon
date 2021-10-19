/** @format */

// eslint-disable-next-line import/named
import { createApp } from 'vue';
import App from './App.vue';

import { waterIconInstall } from '@fe6/icon-vue';
import { waterMap } from '@fe6/icon-img';

// icon 的样式
// import 'icon.less';

const app = createApp(App);

waterIconInstall(app, 'i');
// 全局注册 vue icon
// waterIconInstall(app); // 默认是 icon 前缀

// 全局注册 img icon 暂不支持
// Object.keys(waterMap).forEach((iconName) => {
//   app.component(`Water${iconName}`, waterMap[iconName]);
// });

app.mount('#app');
