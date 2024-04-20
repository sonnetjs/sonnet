import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEPointLightElement extends CSVGElement<SVGFEPointLightElement> {
  public el?: SVGFEPointLightElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'fePointLight',
      } as SVGFEPointLightElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'fePointLight',
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
}

export function fePointLight() {
  return new CSVGFEPointLightElement();
}
