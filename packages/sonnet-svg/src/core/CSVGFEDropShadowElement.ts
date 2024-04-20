import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEDropShadowElement extends CSVGElement<SVGFEDropShadowElement> {
  public el?: SVGFEDropShadowElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feDropShadow',
      } as SVGFEDropShadowElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feDropShadow',
      );
    }
  }

  public dx(value: string) {
    if (this.el) {
      this.el.setAttribute('dx', value);
    }
    return this;
  }

  public dy(value: string) {
    if (this.el) {
      this.el.setAttribute('dy', value);
    }
    return this;
  }

  public stdDeviation(value: string) {
    if (this.el) {
      this.el.setAttribute('stdDeviation', value);
    }
    return this;
  }

  public colorInterpolationFilters(value: string) {
    if (this.el) {
      this.el.setAttribute('color-interpolation-filters', value);
    }
    return this;
  }

  public floodColor(value: string) {
    if (this.el) {
      this.el.setAttribute('flood-color', value);
    }
    return this;
  }

  public floodOpacity(value: string) {
    if (this.el) {
      this.el.setAttribute('flood-opacity', value);
    }
    return this;
  }

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }

  public result(value: string) {
    if (this.el) {
      this.el.setAttribute('result', value);
    }
    return this;
  }

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }
}

export function feDropShadow() {
  return new CSVGFEDropShadowElement();
}
