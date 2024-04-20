import SonnetComponent from '../abstract/SonnetComponent';
import { Sonnet } from './Sonnet';

class SonnetSSR extends Sonnet {
  constructor(component: SonnetComponent) {
    super(component);
  }

  get() {
    return this._component.get();
  }
}

export function createSSRApp(component: SonnetComponent) {
  return new SonnetSSR(component);
}
