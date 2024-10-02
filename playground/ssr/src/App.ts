import { $component, SonnetComponent } from '@sonnetjs/core';
import Counter from './Counter';

class App extends SonnetComponent {
  public script() {
    console.log('script');
  }

  get() {
    return /*html*/ `
    <div>
      ${Counter().get()}
    </div>
    `;
  }
}

export default $component(App);