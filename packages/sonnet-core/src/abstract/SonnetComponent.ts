export default class SonnetComponent {
  protected _id: string = '';
  protected _index: number = 0;

  constructor() {}

  public id(id: string) {
    this._id = id;
    return this;
  }

  public index(index: number) {
    this._index = index;
    return this;
  }

  public static script() {}

  public script() {}

  public get(): string | Element {
    return '';
  }
}
