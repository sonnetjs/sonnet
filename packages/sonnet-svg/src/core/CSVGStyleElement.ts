import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGStyleElement extends CSVGElement<SVGStyleElement> {
  public el?: SVGStyleElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'style',
      } as SVGStyleElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    }
  }

  public type(value: string) {
    this.el?.setAttribute('type', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:type',
      value,
    );
    return this;
  }

  public media(value: string) {
    this.el?.setAttribute('media', value);
    return this;
  }

  public title(value: string) {
    this.el?.setAttribute('title', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:title',
      value,
    );
    return this;
  }
}

export function style() {
  return new CSVGStyleElement();
}
