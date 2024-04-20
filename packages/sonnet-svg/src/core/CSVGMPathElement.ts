import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGMPathElement extends CSVGElement<SVGMPathElement> {
  public el?: SVGMPathElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'mpath',
      } as SVGMPathElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'mpath');
    }
  }

  public href(value: string) {
    if (this.el) {
      this.el.setAttribute('href', value);
      this.el.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        value,
      );
    }
    return this;
  }
}

export function mpath() {
  return new CSVGMPathElement();
}
