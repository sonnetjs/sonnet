import { div, main } from '@sonnetjs/core';
import { HeroSection } from './components/sections';
import { Header, Footer } from './components/shared';

const HeroSectionComponent = new HeroSection();

class App {
  public script() {
    HeroSectionComponent.script();
  }

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
