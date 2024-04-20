import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFilterElement extends CSVGElement<SVGFilterElement> {
  public el?: SVGFilterElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'filter',
      } as SVGFilterElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'filter',
      );
    }
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

  public width(value: string) {
    if (this.el) {
      this.el.setAttribute('width', value);
    }
    return this;
  }

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }

  public filterUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('filterUnits', value);
    }
    return this;
  }

  public primitiveUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('primitiveUnits', value);
    }
    return this;
  }

  public href(value: string) {
    if (this.el) {
      this.el.setAttribute('href', value);
      this.el.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        value,
      );
    }
    return this;
  }
}

export function filter() {
  return new CSVGFilterElement();
}
