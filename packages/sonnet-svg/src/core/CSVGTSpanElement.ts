import { isServer } from '@sonnetjs/shared';
import CSVGTextPositioningElement from './CSVGTextPositioningElement';

export default class CSVGTSpanElement extends CSVGTextPositioningElement<SVGTSpanElement> {
  public el?: SVGTSpanElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'tspan',
      } as SVGTSpanElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
    }
  }

  public x(value: string) {
    this.el?.setAttribute('x', value);
    return this;
  }

  public y(value: string) {
    this.el?.setAttribute('y', value);
    return this;
  }

  public dx(value: string) {
    this.el?.setAttribute('dx', value);
    return this;
  }

  public dy(value: string) {
    this.el?.setAttribute('dy', value);
    return this;
  }

  public rotate(value: string) {
    this.el?.setAttribute('rotate', value);
    return this;
  }

  public lengthAdjust(value: string) {
    this.el?.setAttribute('lengthAdjust', value);
    return this;
  }

  public textLength(value: string) {
    this.el?.setAttribute('textLength', value);
    return this;
  }

  public baselineShift(value: string) {
    this.el?.setAttribute('baselineShift', value);
    return this;
  }
}

export function tspan() {
  return new CSVGTSpanElement();
}
