import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGUseElement extends CSVGGraphicsElement<SVGUseElement> {
  public el?: SVGUseElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'use',
      } as SVGUseElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    }
  }

  public href(value: string) {
    this.el?.setAttribute('href', value);
    this.el?.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
    return this;
  }

  public width(width: string | number) {
    this.el?.setAttribute('width', width.toString());
    return this;
  }

  public height(height: string | number) {
    this.el?.setAttribute('height', height.toString());
    return this;
  }

  public x(x: string | number) {
    this.el?.setAttribute('x', x.toString());
    return this;
  }

  public y(y: string | number) {
    this.el?.setAttribute('y', y.toString());
    return this;
  }

  public mask(value: string) {
    this.el?.setAttribute('mask', value);
    return this;
  }

  public pointerEvents(value: string) {
    this.el?.setAttribute('pointer-events', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }

  public vectorOffset(value: string) {
    this.el?.setAttribute('vector-offset', value);
    return this;
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
    return this;
  }
}

export function use() {
  return new CSVGUseElement();
}
