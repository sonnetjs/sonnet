import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEMorphologyElement extends CSVGElement<SVGFEMorphologyElement> {
  public el?: SVGFEMorphologyElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feMorphology',
      } as SVGFEMorphologyElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feMorphology',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
  }

  public operator(value: string) {
    if (this.el) {
      this.el.setAttribute('operator', value);
    }
    return this;
  }

  public radius(value: string) {
    if (this.el) {
      this.el.setAttribute('radius', value);
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

export function feMorphology() {
  return new CSVGFEMorphologyElement();
}
