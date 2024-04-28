import { isBrowser } from '@sonnetjs/shared';

import { EventEmitter } from './Event';
import SonnetComponent from '../abstract/SonnetComponent';

const event = EventEmitter.getInstance();

class SonnetApp {
  private _ssr: boolean = false;
  private _component?: SonnetComponent;

  constructor() {}

  ssr(value: boolean = true) {
    this._ssr = value;
    return this;
  }

  root(component: SonnetComponent) {
    this._component = component;
  }

  async mount(selector: string) {
    if (!this._ssr && isBrowser()) {
      const el = document.querySelector(selector);
      if (el && this._component) {
        const component = await this._component.get();
        if (typeof component === 'string') {
          el.innerHTML = component as string;
        } else if (component instanceof Element) {
          el.appendChild(component);
        }
      }
    }
    event.emit('script');
    event.off('script');
  }
}

export function createApp() {
  return new SonnetApp();
}
