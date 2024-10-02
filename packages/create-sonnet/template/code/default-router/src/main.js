import App from './App';
import { routers } from './routes';
import './style.css';

import { createApp } from '@sonnetjs/core';

const app = createApp();
app.root(App);
app.use(routers);
app.lazy();
app.mount('#app');
app.initialized();