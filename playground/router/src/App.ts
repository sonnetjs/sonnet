import { $component, SonnetComponent } from '@sonnetjs/core';
import { header } from './partials/header';

class App extends SonnetComponent {
  static script(): void {
    console.log('App script');
  }

  public get() {
    return /*html */ `
    ${header()}
    <div id="app-1">
      ${this._children}
    </div
    `;
  }
}

export default $component(App);
