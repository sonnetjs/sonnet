import './style.css';
import { createApp } from '@sonnetjs/core';
import Counter from './Counter';

const app = createApp();
app.root(Counter());
app.mount('#app');
