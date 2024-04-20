import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGDefsElement extends CSVGGraphicsElement<SVGDefsElement> {
  public el?: SVGDefsElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'defs',
      } as SVGDefsElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    }
  }

  public pointerEvents(value: string) {
    this.el?.setAttribute('pointer-events', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }
}

export function defs() {
  return new CSVGDefsElement();
}
