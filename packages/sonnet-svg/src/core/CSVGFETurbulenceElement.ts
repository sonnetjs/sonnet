import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFETurbulenceElement extends CSVGElement<SVGFETurbulenceElement> {
  public el?: SVGFETurbulenceElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feTurbulence',
      } as SVGFETurbulenceElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feTurbulence',
      );
    }
  }

  public baseFrequency(value: string) {
    if (this.el) {
      this.el.setAttribute('baseFrequency', value);
    }
    return this;
  }

  public numOctaves(value: string) {
    if (this.el) {
      this.el.setAttribute('numOctaves', value);
    }
    return this;
  }

  public seed(value: string) {
    if (this.el) {
      this.el.setAttribute('seed', value);
    }
    return this;
  }

  public stitchTiles(value: string) {
    if (this.el) {
      this.el.setAttribute('stitchTiles', value);
    }
    return this;
  }

  public type(value: string) {
    if (this.el) {
      this.el.setAttribute('type', value);
      this.el?.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:type',
        value,
      );
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

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }

  public result(value: string) {
    if (this.el) {
      this.el.setAttribute('result', value);
    }
    return this;
  }
}

export function feTurbulence() {
  return new CSVGFETurbulenceElement();
}
