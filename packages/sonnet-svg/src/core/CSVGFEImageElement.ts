import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEImageElement extends CSVGElement<SVGFEImageElement> {
  public el?: SVGFEImageElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feImage',
      } as SVGFEImageElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feImage',
      );
    }
  }

  public crossOrigin(value: string) {
    if (this.el) {
      this.el.setAttribute('crossOrigin', value);
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

  public preserveAspectRatio(value: string) {
    if (this.el) {
      this.el.setAttribute('preserveAspectRatio', value);
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

export function feImage() {
  return new CSVGFEImageElement();
}
