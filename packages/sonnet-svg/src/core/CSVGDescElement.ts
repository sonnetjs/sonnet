import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGAElemenDesc extends CSVGElement<SVGDescElement> {
  public el?: SVGDescElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'desc',
      } as SVGDescElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'desc');
    }
  }
}

export function desc() {
  return new CSVGAElemenDesc();
}
