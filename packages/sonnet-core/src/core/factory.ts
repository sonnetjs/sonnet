import { SonnetGet } from '@sonnetjs/shared';
import SonnetComponent from '../abstract/SonnetComponent';
import { EventEmitter } from './Event';

const event = EventEmitter.getInstance();

interface Component {
  script?: () => void;
  staticScript?: () => void;
}

interface ComponentFunction<T> extends Component {
  (args?: T): SonnetGet;
}

interface ComponentClass<T> extends Component {
  new (args?: T): SonnetComponent;
}

export function $component<T>(
  component: ComponentFunction<T> | ComponentClass<T>,
) {
  return (args?: T) => {
    if (component.prototype instanceof SonnetComponent) {
      // @ts-expect-error - this is a class
      const instance = new component(args);
      if (component.script && component.script.toString() !== 'script(){}') {
        event.once('script', component.script);
      }
      if (instance.script) {
        event.on('script', instance.script.bind(instance));
      }
      return instance as SonnetComponent;
    }
    if (component.staticScript) {
      event.once('script', component.staticScript);
    }
    if (component.script) {
      event.on('script', component.script);
    }
    const result = {
      // @ts-expect-error - this is a function
      get: () => component(args),
      callback: (cb: (component: SonnetComponent) => void) => {
        cb(result);
        return result;
      },
    } as SonnetComponent;

    return result;
  };
}
