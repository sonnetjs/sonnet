import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEDiffuseLightingElement extends CSVGElement<SVGFEDiffuseLightingElement> {
  public el?: SVGFEDiffuseLightingElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feDiffuseLighting',
      } as SVGFEDiffuseLightingElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feDiffuseLighting',
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

  public diffuseConstant(value: string) {
    if (this.el) {
      this.el.setAttribute('diffuseConstant', value);
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

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }
}

export function feDiffuseLighting() {
  return new CSVGFEDiffuseLightingElement();
}
