import { $component, SonnetComponent } from '@sonnetjs/core';

class Home extends SonnetComponent {
  script() {
    console.log('Home script');
  }
  get() {
    return /*html */ `
    <div>
      <h1>Home</h1>
      <p>Welcome to the Sonnet Playground</p>
    </div>
    `;
  }
}

export default $component(Home);
