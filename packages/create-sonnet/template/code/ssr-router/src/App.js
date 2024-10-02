import { $component, SonnetComponent } from '@sonnetjs/core';
import { header } from './partials/header';

class App extends SonnetComponent {
  static script() {
    console.log('App script');
  }

  get() {
    return /*html */ `
    ${header()}
    <div id="app-1">
      ${this._children}
    </div
    `;
  }
}

export default $component(App);
