import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEOffsetElement extends CSVGElement<SVGFEOffsetElement> {
  public el?: SVGFEOffsetElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feOffset',
      } as SVGFEOffsetElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feOffset',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
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

  public colorInterpolationFilters(value: string) {
    if (this.el) {
      this.el.setAttribute('color-interpolation-filters', value);
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

export function feOffset() {
  return new CSVGFEOffsetElement();
}
