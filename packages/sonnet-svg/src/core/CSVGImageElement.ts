import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGImageElement extends CSVGGraphicsElement<SVGImageElement> {
  public el?: SVGImageElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'image',
      } as SVGImageElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'image');
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

  public href(value: string) {
    if (this.el) {
      this.el.setAttribute('href', value);
      this.el.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
    }
    return this;
  }

  public preserveAspectRatio(value: string) {
    if (this.el) {
      this.el.setAttribute('preserveAspectRatio', value);
    }
    return this;
  }

  public crossOrigin(value: string) {
    if (this.el) {
      this.el.setAttribute('crossOrigin', value);
    }
    return this;
  }

  public decoding(value: string) {
    if (this.el) {
      this.el.setAttribute('decoding', value);
    }
    return this;
  }

  public imageRendering(value: string) {
    if (this.el) {
      this.el.setAttribute('imageRendering', value);
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

  public visibility(value: string) {
    this.el?.setAttribute('visibility', value);
    return this;
  }
}

export function image() {
  return new CSVGImageElement();
}
