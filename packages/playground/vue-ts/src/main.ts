/** @format */

// eslint-disable-next-line import/named
import { createApp } from 'vue';
import App from './App.vue';

import { waterIconInstall } from '@fe6/icon-vue';

// icon 的样式
// import 'icon.less';

const app = createApp(App);

// waterIconInstall(app, 'i');
waterIconInstall(app);

app.mount('#app');
