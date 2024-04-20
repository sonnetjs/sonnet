import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGMaskElement extends CSVGElement<SVGMaskElement> {
  public el?: SVGMaskElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'mask',
      } as SVGMaskElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'mask');
    }
  }

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }

  public maskContentUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('maskContentUnits', value);
    }
    return this;
  }

  public maskUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('maskUnits', value);
    }
    return this;
  }

  public width(value: string) {
    if (this.el) {
      this.el.setAttribute('width', value);
    }
    return this;
  }

  public x(value: string) {
    if (this.el) {
      this.el.setAttribute('x', value);
    }
    return this;
  }

  public y(value: string) {
    if (this.el) {
      this.el.setAttribute('y', value);
    }
    return this;
  }

  public mask(value: string) {
    if (this.el) {
      this.el.setAttribute('mask', value);
    }
    return this;
  }

  public pointerEvents(value: string) {
    this.el?.setAttribute('pointer-events', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }
}

export function mask() {
  return new CSVGMaskElement();
}
