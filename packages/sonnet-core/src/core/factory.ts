import { isBrowser, SonnetHead } from '@sonnetjs/shared';

import { EventEmitter } from './Event';
import SonnetComponent from '../abstract/SonnetComponent';

const event = EventEmitter.getInstance();

interface Component<T> {
  new(args?: T): SonnetComponent;
  head?: () => void;
  script?: () => void;
}

export function $component<T>(component: Component<T>) {
  return (args?: T) => {
    const instance = new component(args);
    if (isBrowser()) {
      // head tags
      if (component.head && component.head.toString() !== 'head(){return""}') {
        event.once<SonnetHead>('head', component.head as () => SonnetHead);
      }
      if (instance.head && instance.head.toString() !== 'head(){return""}') {
        event.on<SonnetHead>('head', instance.head.bind(instance));
      }
      // scripts
      if (component.script && component.script.toString() !== 'script(){}') {
        event.once('script', component.script);
      }
      if (instance.script && instance.script.toString() !== 'script(){}') {
        event.on('script', instance.script.bind(instance));
      }
    }

    return instance as SonnetComponent;
  };
}
