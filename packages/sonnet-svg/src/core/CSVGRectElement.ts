import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGRectElement extends CSVGGeometryElement<SVGRectElement> {
  public el?: SVGRectElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'rect',
      } as SVGRectElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
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

  public width(value: string) {
    this.el?.setAttribute('width', value);
    return this;
  }

  public height(value: string) {
    this.el?.setAttribute('height', value);
    return this;
  }

  public rx(value: string) {
    this.el?.setAttribute('rx', value);
    return this;
  }

  public ry(value: string) {
    this.el?.setAttribute('ry', value);
    return this;
  }

  public pathLength(value: string) {
    this.el?.setAttribute('pathLength', value);
    return this;
  }

  public mask(value: string) {
    this.el?.setAttribute('mask', value);
    return this;
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
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

  public visibility(value: string) {
    this.el?.setAttribute('visibility', value);
    return this;
  }
}

export function rect() {
  return new CSVGRectElement();
}
