import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGTitleElement extends CSVGElement<SVGTitleElement> {
  public el?: SVGTitleElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'title',
      } as SVGTitleElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    }
  }
}

export function title() {
  return new CSVGTitleElement();
}
