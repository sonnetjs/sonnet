import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFECompositeElement extends CSVGElement<SVGFECompositeElement> {
  public el?: SVGFECompositeElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feComposite',
      } as SVGFECompositeElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feComposite',
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

  public operator(value: string) {
    if (this.el) {
      this.el.setAttribute('operator', value);
    }
    return this;
  }

  public k1(value: string) {
    if (this.el) {
      this.el.setAttribute('k1', value);
    }
    return this;
  }

  public k2(value: string) {
    if (this.el) {
      this.el.setAttribute('k2', value);
    }
    return this;
  }

  public k3(value: string) {
    if (this.el) {
      this.el.setAttribute('k3', value);
    }
    return this;
  }

  public k4(value: string) {
    if (this.el) {
      this.el.setAttribute('k4', value);
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
}

export function feComposite() {
  return new CSVGFECompositeElement();
}
