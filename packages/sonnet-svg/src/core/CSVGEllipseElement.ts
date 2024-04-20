import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGEllipseElement extends CSVGGeometryElement<SVGEllipseElement> {
  public el?: SVGEllipseElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'ellipse',
      } as SVGEllipseElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'ellipse',
      );
    }
  }

  public cx(value: string) {
    this.el?.setAttribute('cx', value);
    return this;
  }

  public cy(value: string) {
    this.el?.setAttribute('cy', value);
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

export function ellipse() {
  return new CSVGEllipseElement();
}
