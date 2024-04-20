import { isServer } from '@sonnetjs/shared';
import CSVGGeometryElement from './CSVGGeometryElement';

export default class CSVGLineElement extends CSVGGeometryElement<SVGLineElement> {
  public el?: SVGLineElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'line',
      } as SVGLineElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    }
  }

  public x1(value: string) {
    if (this.el) {
      this.el.setAttribute('x1', value);
    }
    return this;
  }

  public y1(value: string) {
    if (this.el) {
      this.el.setAttribute('y1', value);
    }
    return this;
  }

  public x2(value: string) {
    if (this.el) {
      this.el.setAttribute('x2', value);
    }
    return this;
  }

  public y2(value: string) {
    if (this.el) {
      this.el.setAttribute('y2', value);
    }
    return this;
  }

  public pathLength(value: string) {
    if (this.el) {
      this.el.setAttribute('pathLength', value);
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

export function line() {
  return new CSVGLineElement();
}
