/** @format */

// eslint-disable-next-line import/named
import { createApp } from 'vue';
import App from './App.vue';

import { waterIconInstall } from '@fe6/icon-vue';

const app = createApp(App);

waterIconInstall(app);

app.mount('#app');
