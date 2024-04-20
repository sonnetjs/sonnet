import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFETileElement extends CSVGElement<SVGFETileElement> {
  public el?: SVGFETileElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feTile',
      } as SVGFETileElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feTile',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
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

export function feTile() {
  return new CSVGFETileElement();
}
