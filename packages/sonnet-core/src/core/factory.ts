import { EventEmitter } from './Event';
import SonnetComponent from '../abstract/SonnetComponent';

const event = EventEmitter.getInstance();

interface Component<T> {
  new (args?: T): SonnetComponent;
  script?: () => void;
  staticScript?: () => void;
}

export function $component<T>(component: Component<T>) {
  return (args?: T) => {
    const instance = new component(args);
    if (component.script && component.script.toString() !== 'script(){}') {
      event.once('script', component.script);
    }
    if (instance.script) {
      event.on('script', instance.script.bind(instance));
    }
    return instance as SonnetComponent;
  };
}
