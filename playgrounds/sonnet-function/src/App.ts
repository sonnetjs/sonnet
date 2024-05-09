import { $component } from '@sonnetjs/core';
import Counter from './Counter';

function App() {
  return /*html*/ `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite Logo" />
      </a>
      <h1>Vite</h1>
      <div class="card">
        ${Counter().get()}
      </div>
      <p class="read-the-docs">Edit src/main.ts and save to test HMR.</p>
    </div>
  `;
}

export default $component(App);
