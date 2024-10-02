import './style.css';
import { createApp } from '@sonnetjs/core';

import App from './App';

const app = createApp();
app.root(App);
app.ssr();
app.mount('#app');