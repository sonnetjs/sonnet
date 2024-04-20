import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGCircleElement extends CSVGGeometryElement<SVGCircleElement> {
  public el?: SVGCircleElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'circle',
      } as SVGCircleElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'circle',
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

  public r(value: string) {
    this.el?.setAttribute('r', value);

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

export function circle() {
  return new CSVGCircleElement();
}
