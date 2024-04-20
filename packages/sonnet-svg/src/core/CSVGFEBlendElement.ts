import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGFEBlendElement extends CSVGElement<SVGFEBlendElement> {
  public el?: SVGFEBlendElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feBlend',
      } as SVGFEBlendElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feBlend',
      );
    }
  }

  public in(value: string) {
    this.el?.setAttribute('in', value);
    return this;
  }

  public in2(value: string) {
    this.el?.setAttribute('in2', value);
    return this;
  }

  public mode(value: string) {
    this.el?.setAttribute('mode', value);
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

export function feBlend() {
  return new CSVGFEBlendElement();
}
