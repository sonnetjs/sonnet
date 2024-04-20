import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEComponentTransferElement extends CSVGElement<SVGFEComponentTransferElement> {
  public el?: SVGFEComponentTransferElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feComponentTransfer',
      } as SVGFEComponentTransferElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feComponentTransfer',
      );
    }
  }

  public in(value: string) {
    this.el?.setAttribute('in', value);
    return this;
  }

  public height(value: string) {
    this.el?.setAttribute('height', value);
    return this;
  }

  public colorInterpolationFilters(value: string) {
    this.el?.setAttribute('color-interpolation-filters', value);
    return this;
  }

  public result(value: string) {
    this.el?.setAttribute('result', value);
    return this;
  }

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }
}

export function feComponentTransfer() {
  return new CSVGFEComponentTransferElement();
}
