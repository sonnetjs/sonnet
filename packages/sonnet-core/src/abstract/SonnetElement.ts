import { Component } from '..';

export abstract class SonnetElement {
  public components: Component[] = [];

  constructor() {}

  public loadScripts() {
    this.script && this.script();

    this.components.forEach((component) => {
      component.loadScripts();
    });
  }

  public script() {}

  public abstract get(): HTMLElement;
}
