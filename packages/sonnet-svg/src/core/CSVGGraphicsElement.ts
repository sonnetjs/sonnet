import CSVGElement from './CSVGElement';

export default class CSVGGraphicsElement<T> extends CSVGElement<T> {
  declare public el?: SVGGraphicsElement;

  constructor() {
    super();
  }

  public clipPath(value: string) {
    if (this.el) {
      this.el.setAttribute('clip-path', value);
    }
    return this;
  }

  public clipRule(value: string) {
    if (this.el) {
      this.el.setAttribute('clip-rule', value);
    }
    return this;
  }

  public clipPathUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('clipPathUnits', value);
    }
    return this;
  }

  public colorInterpolation(value: string) {
    if (this.el) {
      this.el.setAttribute('color-interpolation', value);
    }
    return this;
  }
}
