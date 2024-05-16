import { SonnetGet, SonnetHead } from '@sonnetjs/shared';

export interface SonnetComponentProps {
  _id: string;
  _index: number;
  _children: SonnetComponent[];
}

export default abstract class SonnetComponent {
  constructor() {}

  protected _id: string = '';
  id(id: string) {
    this._id = id;
    return this;
  }

  protected _index: number = 0;
  index(index: number) {
    this._index = index;
    return this;
  }

  protected _children: SonnetGet = '';
  children(children: SonnetGet) {
    this._children = children;
    return this;
  }

  private _hashIdCache: string | undefined = undefined;
  get hashId() {
    if (this._hashIdCache) {
      return this._hashIdCache;
    }
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const hash = array[0].toString().substring(0, 8);
    this._hashIdCache = hash;
    return hash;
  }

  private _parentCache: HTMLElement | undefined = undefined;
  get parent() {
    if (this._parentCache) {
      return this._parentCache;
    }
    const parent = document.getElementById(this.hashId) as HTMLElement;
    this._parentCache = parent;
    return parent;
  }

  callback(cb: (component: SonnetComponent) => void) {
    cb(this);
    return this;
  }

  static head(): SonnetHead {
    return '';
  }

  head(): SonnetHead {
    return '';
  }

  static script() {}

  script() {}

  get(): SonnetGet {
    return '';
  }
}
