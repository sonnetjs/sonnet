import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGGElement extends CSVGGraphicsElement<SVGGElement> {
  public el?: SVGGElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'g',
      } as SVGGElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    }
  }

  public fill(color: string) {
    if (this.el) {
      this.el.setAttribute('fill', color);
    }
    return this;
  }

  public stroke(color: string) {
    if (this.el) {
      this.el.setAttribute('stroke', color);
    }
    return this;
  }

  public strokeWidth(width: number) {
    if (this.el) {
      this.el.setAttribute('stroke-width', width.toString());
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
}

export function g() {
  return new CSVGGElement();
}
