import CSVGElement from './CSVGElement';

export default class CSVGGradientElement<T> extends CSVGElement<T> {
  declare public el?: SVGGradientElement;

  constructor() {
    super();
  }

  public gradientUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('gradientUnits', value);
    }
    return this;
  }

  public gradientTransform(value: string) {
    if (this.el) {
      this.el.setAttribute('gradientTransform', value);
    }
    return this;
  }

  public spreadMethod(value: string) {
    if (this.el) {
      this.el.setAttribute('spreadMethod', value);
    }
    return this;
  }
}
