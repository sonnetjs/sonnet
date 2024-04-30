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
