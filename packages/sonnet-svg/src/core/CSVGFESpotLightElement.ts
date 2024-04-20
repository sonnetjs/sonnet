import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFESpotLightElement extends CSVGElement<SVGFESpotLightElement> {
  public el?: SVGFESpotLightElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feSpotLight',
      } as SVGFESpotLightElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feSpotLight',
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

  public z(value: string) {
    if (this.el) {
      this.el.setAttribute('z', value);
    }
    return this;
  }

  public pointsAtX(value: string) {
    if (this.el) {
      this.el.setAttribute('pointsAtX', value);
    }
    return this;
  }

  public pointsAtY(value: string) {
    if (this.el) {
      this.el.setAttribute('pointsAtY', value);
    }
    return this;
  }

  public pointsAtZ(value: string) {
    if (this.el) {
      this.el.setAttribute('pointsAtZ', value);
    }
    return this;
  }

  public specularExponent(value: string) {
    if (this.el) {
      this.el.setAttribute('specularExponent', value);
    }
    return this;
  }

  public limitingConeAngle(value: string) {
    if (this.el) {
      this.el.setAttribute('limitingConeAngle', value);
    }
    return this;
  }
}

export function feSpotLight() {
  return new CSVGFESpotLightElement();
}
