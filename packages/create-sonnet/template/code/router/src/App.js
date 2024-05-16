import { $component, SonnetComponent } from '@sonnetjs/core';
import { Header } from './partials/Header';

class App extends SonnetComponent {
  static script() {
    console.log('App script');
  }

  get() {
    return /*html */ `
    ${Header()}
    <div id="app-1">
      ${this.children_}
    </div
    `;
  }
}

export default $component(App);