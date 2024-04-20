import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEMergeNodeElement extends CSVGElement<SVGFEMergeNodeElement> {
  public el?: SVGFEMergeNodeElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feMergeNode',
      } as SVGFEMergeNodeElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feMergeNode',
      );
    }
  }

  public in(value: string) {
    if (this.el) {
      this.el.setAttribute('in', value);
    }
    return this;
  }
}

export function feMergeNode() {
  return new CSVGFEMergeNodeElement();
}
