import './style.css';
import { createApp } from '@sonnetjs/core';
import Counter from './Counter';

const app = createApp(Counter()).ssr();
app.mount('#app');
