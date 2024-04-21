import { isBrowser } from '@sonnetjs/shared';
import SonnetComponent from '../abstract/SonnetComponent';
import { Sonnet } from './Sonnet';
import { EventEmitter } from './Event';

const event = EventEmitter.getInstance();

class SonnetClient extends Sonnet {
  private _ssr: boolean = false;

  constructor(component: SonnetComponent) {
    super(component);
  }

  ssr(value: boolean = true) {
    this._ssr = value;
    return this;
  }

  mount(selector: string) {
    if (!this._ssr && isBrowser()) {
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
    event.emit('script');
    event.off('script');
  }
}

export function createApp(component: SonnetComponent) {
  return new SonnetClient(component);
}
