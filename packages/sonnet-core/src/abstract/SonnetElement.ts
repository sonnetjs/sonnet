import { Component } from '..';

export abstract class SonnetElement {
  protected _id: string = '';
  protected _index: number = 0;

  public components: Component[] = [];

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

  public head() {}

  public script() {}

  public get() {}
}
