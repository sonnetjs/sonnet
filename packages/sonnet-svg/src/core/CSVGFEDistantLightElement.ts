import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEDistantLightElement extends CSVGElement<SVGFEDistantLightElement> {
  public el?: SVGFEDistantLightElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feDistantLight',
      } as SVGFEDistantLightElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feDistantLight',
      );
    }
  }

  public azimuth(value: string) {
    if (this.el) {
      this.el.setAttribute('azimuth', value);
    }
    return this;
  }

  public elevation(value: string) {
    if (this.el) {
      this.el.setAttribute('elevation', value);
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

export function feDistantLight() {
  return new CSVGFEDistantLightElement();
}
