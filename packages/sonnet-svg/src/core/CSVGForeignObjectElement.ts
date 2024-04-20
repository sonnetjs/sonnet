import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGForeignObjectElement extends CSVGGraphicsElement<SVGForeignObjectElement> {
  public el?: SVGForeignObjectElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'foreignObject',
      } as SVGForeignObjectElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'foreignObject',
      );
    }
  }

  public x(value: string) {
    if (this.el) {
      this.el.setAttribute('x', value);
    }
    return this;
  }

  public y(value: string) {
    if (this.el) {
      this.el.setAttribute('y', value);
    }
    return this;
  }

  public width(value: string) {
    if (this.el) {
      this.el.setAttribute('width', value);
    }
    return this;
  }

  public height(value: string) {
    if (this.el) {
      this.el.setAttribute('height', value);
    }
    return this;
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
    return this;
  }

  public overflow(value: string) {
    this.el?.setAttribute('overflow', value);
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
    if (this.el) {
      this.el.setAttribute('vector-offset', value);
    }
    return this;
  }

  public visibility(value: string) {
    this.el?.setAttribute('visibility', value);
    return this;
  }
}

export function foreignObject() {
  return new CSVGForeignObjectElement();
}
