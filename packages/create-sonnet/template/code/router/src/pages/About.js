import { $component, SonnetComponent } from '@sonnetjs/core';
class About extends SonnetComponent {
  get() {
    return /*html */ `
    <div>
      <h1>About</h1>
      <p>Welcome to the Sonnet Playground</p>
    </div>
    `;
  }
}

export default $component(About);