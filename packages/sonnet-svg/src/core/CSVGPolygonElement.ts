import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGPolygonElement extends CSVGGeometryElement<SVGPolygonElement> {
  public el?: SVGPolygonElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'polygon',
      } as SVGPolygonElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'polygon',
      );
    }
  }

  public points(value: string) {
    if (this.el) {
      this.el.setAttribute('points', value);
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

export function polygon() {
  return new CSVGPolygonElement();
}
