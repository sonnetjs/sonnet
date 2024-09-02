import './style.css';
import { createApp } from '@sonnetjs/core';
import Todo from './Todo';

const app = createApp();
app.root(Todo);
app.mount('#app');
