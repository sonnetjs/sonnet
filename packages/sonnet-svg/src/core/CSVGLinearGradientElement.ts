import { isServer } from '@sonnetjs/shared';
import CSVGGradientElement from './CSVGGradientElement';

export default class CSVGLinearGradientElement extends CSVGGradientElement<SVGLinearGradientElement> {
  public el?: SVGLinearGradientElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'linearGradient',
      } as SVGLinearGradientElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'linearGradient',
      );
    }
  }

  public gradientUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('gradientUnits', value);
    }
    return this;
  }

  public x1(value: string) {
    if (this.el) {
      this.el.setAttribute('x1', value);
    }
    return this;
  }

  public y1(value: string) {
    if (this.el) {
      this.el.setAttribute('y1', value);
    }
    return this;
  }

  public x2(value: string) {
    if (this.el) {
      this.el.setAttribute('x2', value);
    }
    return this;
  }

  public y2(value: string) {
    if (this.el) {
      this.el.setAttribute('y2', value);
    }
    return this;
  }

  public spreadMethod(value: string) {
    if (this.el) {
      this.el.setAttribute('spreadMethod', value);
    }
    return this;
  }

  public gradientTransform(value: string) {
    if (this.el) {
      this.el.setAttribute('gradientTransform', value);
    }
    return this;
  }

  public href(value: string) {
    if (this.el) {
      this.el.setAttribute('href', value);
      this.el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
    }
    return this;
  }
}

export function linearGradient() {
  return new CSVGLinearGradientElement();
}
