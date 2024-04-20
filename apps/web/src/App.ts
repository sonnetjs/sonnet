import { SonnetComponent } from '@sonnetjs/core';
import { div, main } from '@sonnetjs/html';
import { HeroSection } from './components/sections';
import { Header, Footer } from './components/shared';

const HeroSectionComponent = new HeroSection();

class App extends SonnetComponent {
  components: SonnetComponent[] = [HeroSectionComponent];

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
