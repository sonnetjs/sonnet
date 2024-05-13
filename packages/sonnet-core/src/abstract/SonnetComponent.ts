import { SonnetGet } from '@sonnetjs/shared';

export interface SonnetComponentProps {
  _id: string;
  _index: number;
  _children: SonnetComponent[];
}

export default abstract class SonnetComponent {
  constructor() {}

  private _id: string = '';
  id(id?: string) {
    if (id === undefined) {
      return this._id;
    }
    this._id = id;
    return this;
  }

  private _index: number = 0;
  index(index?: number) {
    if (index === undefined) {
      return this._index;
    }
    this._index = index;
    return this;
  }

  private _children: SonnetGet = '';
  children(children?: SonnetGet) {
    if (children === undefined) {
      return this._children;
    }
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

  public static script() {}

  public script() {}

  public get(): SonnetGet {
    return '';
  }
}
