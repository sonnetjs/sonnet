import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGSwitchElement extends CSVGGraphicsElement<SVGSwitchElement> {
  public el?: SVGSwitchElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'switch',
      } as SVGSwitchElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'switch',
      );
    }
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
    return this;
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

export function switchElement() {
  return new CSVGSwitchElement();
}
