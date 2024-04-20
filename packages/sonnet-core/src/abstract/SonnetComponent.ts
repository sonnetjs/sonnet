export default abstract class SonnetComponent {
  protected _id: string = '';
  protected _index: number = 0;

  public components: SonnetComponent[] = [];

  constructor() {}

  public loadScripts() {
    this.script();

    this.components.forEach((component) => {
      component.loadScripts();
    });
  }

  public id(id: string) {
    this._id = id;
    return this;
  }

  public index(index: number) {
    this._index = index;
    return this;
  }

  public script() {}

  public get(): string | Element {
    return '';
  }
}
