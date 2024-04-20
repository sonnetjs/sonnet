import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEFloodElement extends CSVGElement<SVGFEFloodElement> {
  public el?: SVGFEFloodElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feFlood',
      } as SVGFEFloodElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feFlood',
      );
    }
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

export function feFlood() {
  return new CSVGFEFloodElement();
}
