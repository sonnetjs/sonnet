import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFESpecularLightingElement extends CSVGElement<SVGFESpecularLightingElement> {
  public el?: SVGFESpecularLightingElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feSpecularLighting',
      } as SVGFESpecularLightingElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feSpecularLighting',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
  }

  public surfaceScale(value: string) {
    if (this.el) {
      this.el.setAttribute('surfaceScale', value);
    }
    return this;
  }

  public specularConstant(value: string) {
    if (this.el) {
      this.el.setAttribute('specularConstant', value);
    }
    return this;
  }

  public specularExponent(value: string) {
    if (this.el) {
      this.el.setAttribute('specularExponent', value);
    }
    return this;
  }

  public kernelUnitLength(value: string) {
    if (this.el) {
      this.el.setAttribute('kernelUnitLength', value);
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

  public lightingColor(value: string) {
    if (this.el) {
      this.el.setAttribute('lighting-color', value);
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

export function feSpecularLighting() {
  return new CSVGFESpecularLightingElement();
}
