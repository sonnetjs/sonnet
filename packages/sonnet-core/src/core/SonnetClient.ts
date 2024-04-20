import { isBrowser } from '@sonnetjs/shared';
import SonnetComponent from '../abstract/SonnetComponent';
import { Sonnet } from './Sonnet';

class SonnetClient extends Sonnet {
  constructor(component: SonnetComponent) {
    super(component);
  }

  mount(selector: string) {
    if (isBrowser()) {
      const el = document.querySelector(selector);
      if (el) {
        const component = this._component.get();
        if (typeof component === 'string') {
          el.innerHTML = component as string;
        } else if (component instanceof Element) {
          el.appendChild(component);
        }
      }
    }
    this._component.loadScripts();
  }
}

export function createApp(component: SonnetComponent) {
  return new SonnetClient(component);
}
