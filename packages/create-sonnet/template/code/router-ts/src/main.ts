import App from './App';
import { router } from './router';
import './style.css';

import { createApp } from '@sonnetjs/core';

const app = createApp();
app.root(App);
app.use(router);
app.lazy();
app.mount('#app');
app.initialized();