import './style.css';
import { createApp } from '@sonnetjs/core';
import App from './App';

// benchmark
const app = createApp();
app.root(App);
app.mount('#app');
