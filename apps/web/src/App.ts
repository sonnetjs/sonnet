import { Component, SonnetElement, div, main } from '@sonnetjs/core';
import { HeroSection } from './components/sections';
import { Header, Footer } from './components/shared';

const HeroSectionComponent = new HeroSection();

class App extends SonnetElement {
  components: Component[] = [HeroSectionComponent];

  public get() {
    return div()
      .children(
        Header(),
        main().children(HeroSectionComponent.get()).get(),
        Footer(),
      )
      .get();
  }
}

export default App;
