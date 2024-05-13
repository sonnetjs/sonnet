import { $component, SonnetComponent } from '@sonnetjs/core';

class App extends SonnetComponent {
  static head() {
    return /*html*/ `
    <meta name="description" content="A Vite + Sonnet playground" />
    `;
  }

  public script() {
    console.log('App script');
  }

  public get() {
    return /*html*/ `
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="https://vitejs.dev/logo.svg" class="logo" alt="Vite Logo" />
      </a>
      <h1>Vite</h1>
      <h2>Hello Vite + Sonnet!</h2>
      <p class="read-the-docs">Edit src/main.ts and save to test HMR.</p>
    </div>
    `;
  }
}

export default $component(App);
