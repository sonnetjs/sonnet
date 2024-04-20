import SonnetComponent from '../abstract/SonnetComponent';

export class Sonnet {
  protected _component: SonnetComponent;

  constructor(component: SonnetComponent) {
    this._component = component;
  }
}
