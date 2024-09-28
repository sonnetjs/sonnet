import { $component, SonnetComponent } from '@sonnetjs/core';

class Contact extends SonnetComponent {
  public get() {
    return /*html */ `
    <div>
      <h1>Contact</h1>
      <p>Welcome to the Sonnet Playground</p>
    </div>
    `;
  }
}

export default $component(Contact);
