import SonnetComponent from '../abstract/SonnetComponent';
import { EventEmitter } from './Event';

const event = EventEmitter.getInstance();

export function $component<T>(component: {
  new (args?: T): SonnetComponent;
  script(): void;
}) {
  return (args?: T) => {
    const instance = new component(args);
    if (instance.script) {
      event.on('script', instance.script.bind(instance));
    }
    if (component.script.toString() !== 'script(){}') {
      event.once('script', component.script);
    }
    return instance;
  };
}
