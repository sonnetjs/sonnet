import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEConvolveMatrixElement extends CSVGElement<SVGFEConvolveMatrixElement> {
  public el?: SVGFEConvolveMatrixElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feConvolveMatrix',
      } as SVGFEConvolveMatrixElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feConvolveMatrix',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
  }

  public order(value: string) {
    if (this.el) {
      this.el.setAttribute('order', value);
    }
    return this;
  }

  public kernelMatrix(value: string) {
    if (this.el) {
      this.el.setAttribute('kernelMatrix', value);
    }
    return this;
  }

  public divisor(value: string) {
    if (this.el) {
      this.el.setAttribute('divisor', value);
    }
    return this;
  }

  public bias(value: string) {
    if (this.el) {
      this.el.setAttribute('bias', value);
    }
    return this;
  }

  public targetX(value: string) {
    if (this.el) {
      this.el.setAttribute('targetX', value);
    }
    return this;
  }

  public targetY(value: string) {
    if (this.el) {
      this.el.setAttribute('targetY', value);
    }
    return this;
  }

  public edgeMode(value: string) {
    if (this.el) {
      this.el.setAttribute('edgeMode', value);
    }
    return this;
  }

  public kernelUnitLength(value: string) {
    if (this.el) {
      this.el.setAttribute('kernelUnitLength', value);
    }
    return this;
  }

  public preserveAlpha(value: string) {
    if (this.el) {
      this.el.setAttribute('preserveAlpha', value);
    }
    return this;
  }

  public colorInterpolationFilters(value: string) {
    if (this.el) {
      this.el.setAttribute('color-interpolation-filters', value);
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

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }
}

export function feConvolveMatrix() {
  return new CSVGFEConvolveMatrixElement();
}
