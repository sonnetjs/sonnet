import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEDisplacementMapElement extends CSVGElement<SVGFEDisplacementMapElement> {
  public el?: SVGFEDisplacementMapElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feDisplacementMap',
      } as SVGFEDisplacementMapElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feDisplacementMap',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
  }

  public in2(value: string) {
    if (this.el) {
      this.el.setAttribute('in2', value);
    }
    return this;
  }

  public scale(value: string) {
    if (this.el) {
      this.el.setAttribute('scale', value);
    }
    return this;
  }

  public xChannelSelector(value: string) {
    if (this.el) {
      this.el.setAttribute('xChannelSelector', value);
    }
    return this;
  }

  public yChannelSelector(value: string) {
    if (this.el) {
      this.el.setAttribute('yChannelSelector', value);
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

export function feDisplacementMap() {
  return new CSVGFEDisplacementMapElement();
}
