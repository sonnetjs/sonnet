import { $component, SonnetComponent } from '@sonnetjs/core';
import { Header } from './partials/Header';

class App extends SonnetComponent {
  static script(): void {
    console.log('App script');
  }

  public get() {
    return /*html */ `
    ${Header()}
    <div id="app-1">
      ${this.children()}
    </div
    `;
  }
}

export default $component(App);