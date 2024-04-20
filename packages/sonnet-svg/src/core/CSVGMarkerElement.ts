import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGMarkerElement extends CSVGElement<SVGMarkerElement> {
  public el?: SVGMarkerElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'marker',
      } as SVGMarkerElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'marker',
      );
    }
  }

  public markerHeight(value: string) {
    if (this.el) {
      this.el.setAttribute('markerHeight', value);
    }
    return this;
  }

  public markerUnits(value: string) {
    if (this.el) {
      this.el.setAttribute('markerUnits', value);
    }
    return this;
  }

  public markerWidth(value: string) {
    if (this.el) {
      this.el.setAttribute('markerWidth', value);
    }
    return this;
  }

  public orient(value: string) {
    if (this.el) {
      this.el.setAttribute('orient', value);
    }
    return this;
  }

  public preserveAspectRatio(value: string) {
    if (this.el) {
      this.el.setAttribute('preserveAspectRatio', value);
    }
    return this;
  }

  public refX(value: string) {
    if (this.el) {
      this.el.setAttribute('refX', value);
    }
    return this;
  }

  public refY(value: string) {
    if (this.el) {
      this.el.setAttribute('refY', value);
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
}

export function marker() {
  return new CSVGMarkerElement();
}
