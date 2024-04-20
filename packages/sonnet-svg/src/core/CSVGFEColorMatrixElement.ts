import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEColorMatrixElement extends CSVGElement<SVGFEColorMatrixElement> {
  public el?: SVGFEColorMatrixElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feColorMatrix',
      } as SVGFEColorMatrixElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feColorMatrix',
      );
    }
  }

  public in(value: string) {
    this.el?.setAttribute('in', value);
    return this;
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

  public values(value: string) {
    this.el?.setAttribute('values', value);
    return this;
  }

  public colorInterpolationFilters(value: string) {
    this.el?.setAttribute('color-interpolation-filters', value);
    return this;
  }

  public height(value: string) {
    this.el?.setAttribute('height', value);
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

export function feColorMatrix() {
  return new CSVGFEColorMatrixElement();
}
