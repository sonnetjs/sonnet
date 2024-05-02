export interface SonnetComponentProps {
  _id: string;
  _index: number;
  _children: SonnetComponent[];
}

export type SonnetGet = string | Element | Promise<string | Element>;

export default class SonnetComponent {
  protected _id: string = '';
  protected _index: number = 0;
  protected _children: SonnetGet = '';

  constructor() {}

  hashIdCache: string | undefined = undefined;
  get hashId() {
    if (this.hashIdCache) {
      return this.hashIdCache;
    }
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    const hash = array[0].toString().substring(0, 8);
    this.hashIdCache = hash;
    return hash;
  }

  parentCache: HTMLElement | undefined = undefined;
  get parent() {
    if (this.parentCache) {
      return this.parentCache;
    }
    const parent = document.getElementById(this.hashId) as HTMLElement;
    this.parentCache = parent;
    return parent;
  }

  id(id: string) {
    this._id = id;
    return this;
  }

  index(index: number) {
    this._index = index;
    return this;
  }

  children(children: SonnetGet) {
    this._children = children;
    return this;
  }

  public static script() {}

  public script() {}

  public get(): SonnetGet {
    return '';
  }
}
