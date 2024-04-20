import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGPathElement extends CSVGGeometryElement<SVGPathElement> {
  public el?: SVGPathElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'path',
      } as SVGPathElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
  }

  public d(value: string) {
    if (this.el) {
      this.el.setAttribute('d', value);
    }
    return this;
  }

  public pathLength(value: string) {
    if (this.el) {
      this.el.setAttribute('pathLength', value);
    }
    return this;
  }

  public fillRule(value: string) {
    if (this.el) {
      this.el.setAttribute('fill-rule', value);
    }
    return this;
  }

  public mask(value: string) {
    if (this.el) {
      this.el.setAttribute('mask', value);
    }
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

export function path() {
  return new CSVGPathElement();
}
