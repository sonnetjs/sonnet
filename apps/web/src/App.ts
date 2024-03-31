import { div, main } from '@sonnetjs/core';
import { HeroSection } from './components/sections';
import { Header, Footer } from './components/shared';

const App = async () => {
  return div()
    .children(Header(), main().children(HeroSection()).get(), Footer())
    .get();
};

export default App;
