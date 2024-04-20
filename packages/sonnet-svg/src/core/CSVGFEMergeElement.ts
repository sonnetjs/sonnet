import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEMergeElement extends CSVGElement<SVGFEMergeElement> {
  public el?: SVGFEMergeElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feMerge',
      } as SVGFEMergeElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feMerge',
      );
    }
  }

  public colorInterpolationFilters(value: string) {
    if (this.el) {
      this.el.setAttribute('color-interpolation-filters', value);
    }
    return this;
  }

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }

  public result(value: string) {
    if (this.el) {
      this.el.setAttribute('result', value);
    }
    return this;
  }

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }
}

export function feMerge() {
  return new CSVGFEMergeElement();
}
