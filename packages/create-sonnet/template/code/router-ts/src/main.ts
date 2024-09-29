import './style.css';
import { createApp } from '@sonnetjs/core';
import App from './App';
import { routers } from './routes';

const app = createApp();
app.root(App);
app.use(routers);
app.lazy();
app.mount('#app');
app.initialized();
