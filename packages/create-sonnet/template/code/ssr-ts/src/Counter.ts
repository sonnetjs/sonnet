import { $component, SonnetComponent } from '@sonnetjs/core';

class Counter extends SonnetComponent {
  counter = 0;

  script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement | null;
    counterButton?.addEventListener('click', () => {
      this.counter += 1;
      counterButton.innerText = `count is ${this.counter}`;
    });
  }

  get() {
    return /*html*/ `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite Logo" />
      </a>
      <h1>Vite</h1>
      <div class="card">
        <button id="counter" type="button" class="btn">count is ${this.counter}</button>
      </div>
      <p class="read-the-docs">Edit src/main.ts and save to test HMR.</p>
    </div>
    `;
  }
}

export default $component(Counter);