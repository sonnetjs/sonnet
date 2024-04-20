import { isServer } from '@sonnetjs/shared';
import CSVGTextPositioningElement from './CSVGTextPositioningElement';

export default class CSVGTextElement extends CSVGTextPositioningElement<SVGTextElement> {
  public el?: SVGTextElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'text',
      } as SVGTextElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'text');
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

  public textLength(value: string) {
    this.el?.setAttribute('textLength', value);
    return this;
  }

  public lengthAdjust(value: string) {
    this.el?.setAttribute('lengthAdjust', value);
    return this;
  }

  public mask(value: string) {
    this.el?.setAttribute('mask', value);
    return this;
  }

  public overflow(value: string) {
    this.el?.setAttribute('overflow', value);
  }

  public textRendering(value: string) {
    this.el?.setAttribute('text-rendering', value);
    return this;
  }
}

export function text() {
  return new CSVGTextElement();
}
