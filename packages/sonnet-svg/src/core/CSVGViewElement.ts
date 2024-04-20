import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGViewElement extends CSVGElement<SVGViewElement> {
  public el?: SVGViewElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'view',
      } as SVGViewElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'view');
    }
  }

  public viewBox(value: string) {
    this.el?.setAttribute('viewBox', value);
    return this;
  }
}

export function view() {
  return new CSVGViewElement();
}
