/* eslint-disable @typescript-eslint/no-explicit-any */
import { isBrowser } from '@sonnetjs/shared';

import { EventEmitter } from './Event';
import SonnetComponent from '../abstract/SonnetComponent';

const event = EventEmitter.getInstance();

export class SonnetApp {
  private _ssr: boolean = false;
  private _component?: (args?: any) => SonnetComponent;
  private _props?: any;
  private _plugins: { install: (app: SonnetApp) => void }[] = [];
  private _isLazy: boolean = false;
  private _isMounted: boolean = false;
  private _isInitialized: boolean = false;
  private _mountedId: string = '';

  constructor() {}

  get component() {
    return this._component;
  }

  get isLazy() {
    return this._isLazy;
  }

  get mountedId() {
    return this._mountedId;
  }

  get isMounted() {
    return this._isMounted;
  }

  get isInitialized() {
    return this._isInitialized;
  }

  lazy(value: boolean = true) {
    this._isLazy = value;
    return this;
  }

  ssr(value: boolean = true) {
    this._ssr = value;
    return this;
  }

  root(component: (args?: any) => SonnetComponent, props?: any) {
    this._component = component;
    this._props = props;
    return this;
  }

  use(plugin: { install: (app: SonnetApp) => void }) {
    this._plugins.push(plugin);
    return this;
  }

  private initRootComponent() {
    if (!this._component) return;
    const component = this._component();
    if (this._props?._children) {
      component.children(this._props._children);
    }
    if (this._props?._index) {
      component.index(this._props._index);
    }
    if (this._props?._id) {
      component.id(this._props._id);
    }
    return component;
  }

  async mount(selector: string) {
    if (this._isLazy) {
      this._mountedId = selector;
      return;
    }
    if (!this._ssr && isBrowser()) {
      const el = document.querySelector(selector);
      if (el && this._component) {
        const component = this.initRootComponent();

        const getComponent = await component?.get();

        if (typeof getComponent === 'string') {
          el.innerHTML = getComponent as string;
        } else if (getComponent instanceof Element) {
          el.appendChild(getComponent);
        }
      }
    }
    event.emit('mount');

    event.emit('script');
    event.off('script');

    this._isMounted = true;

    return this;
  }

  unmount() {
    event.off('script');
    event.emit('unmount');
    return this;
  }

  on(event: string, callback: () => void) {
    EventEmitter.getInstance().on(event, callback);
    return this;
  }

  initialized() {
    this._plugins.forEach((plugin) => {
      plugin.install(this);
    });
    event.emit('initialized');
    this._isInitialized = true;
    return this;
  }
}

export function createApp() {
  return new SonnetApp();
}
