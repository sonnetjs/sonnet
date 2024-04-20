import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGScriptElement extends CSVGElement<SVGScriptElement> {
  public el?: SVGScriptElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'script',
      } as SVGScriptElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'script',
      );
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

  public href(value: string) {
    this.el?.setAttribute('href', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      value,
    );
    return this;
  }

  public crossorigin(value: string) {
    this.el?.setAttribute('crossorigin', value);
    return this;
  }
}

export function script() {
  return new CSVGScriptElement();
}
