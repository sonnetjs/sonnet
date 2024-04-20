import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGPatternElement extends CSVGElement<SVGPatternElement> {
  public el?: SVGPatternElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'pattern',
      } as SVGPatternElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'pattern',
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

  public patternUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('patternUnits', value);
    }
    return this;
  }

  public patternContentUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('patternContentUnits', value);
    }
    return this;
  }

  public patternTransform(value: string) {
    if (this.el) {
      this.el.setAttribute('patternTransform', value);
    }
    return this;
  }

  public preserveAspectRatio(value: string) {
    if (this.el) {
      this.el.setAttribute('preserveAspectRatio', value);
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

  public viewBox(value: string) {
    if (this.el) {
      this.el.setAttribute('viewBox', value);
    }
    return this;
  }

  public mask(value: string) {
    if (this.el) {
      this.el.setAttribute('mask', value);
    }
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
}

export function pattern() {
  return new CSVGPatternElement();
}
