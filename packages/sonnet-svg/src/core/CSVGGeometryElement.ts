import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGGeometryElement<T> extends CSVGGraphicsElement<T> {
  public declare el?: SVGGeometryElement;

  constructor() {
    super();
  }

  public fill(value: string) {
    if (this.el) {
      this.el.setAttribute('fill', value);
    }
    return this;
  }

  public fillOpacity(value: string) {
    if (this.el) {
      this.el.setAttribute('fill-opacity', value);
    }
    return this;
  }

  public markerEnd(value: string) {
    if (this.el) {
      this.el.setAttribute('marker-end', value);
    }
    return this;
  }

  public markerMid(value: string) {
    if (this.el) {
      this.el.setAttribute('marker-mid', value);
    }
    return this;
  }

  public markerStart(value: string) {
    if (this.el) {
      this.el.setAttribute('marker-start', value);
    }
    return this;
  }

  public paintOrder(value: string) {
    if (this.el) {
      this.el.setAttribute('paint-order', value);
    }
    return this;
  }

  public pathLength(value: string) {
    if (this.el) {
      this.el.setAttribute('pathLength', value);
    }
    return this;
  }

  public shapeRendering(value: string) {
    if (this.el) {
      this.el.setAttribute('shape-rendering', value);
    }
    return this;
  }

  public stroke(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke', value);
    }
    return this;
  }

  public strokeDasharray(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-dasharray', value);
    }
    return this;
  }

  public strokeDashoffset(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-dashoffset', value);
    }
    return this;
  }

  public strokeLinecap(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-linecap', value);
    }
    return this;
  }

  public strokeLinejoin(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-linejoin', value);
    }
    return this;
  }

  public strokeMiterlimit(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-miterlimit', value);
    }
    return this;
  }

  public strokeOpacity(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-opacity', value);
    }
    return this;
  }

  public strokeWidth(value: string) {
    if (this.el) {
      this.el.setAttribute('stroke-width', value);
    }
    return this;
  }

  public vectorOffset(value: string) {
    if (this.el) {
      this.el.setAttribute('vector-offset', value);
    }
    return this;
  }
}
