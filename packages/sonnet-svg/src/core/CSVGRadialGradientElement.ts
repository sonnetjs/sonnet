import { isServer } from '@sonnetjs/shared';
import CSVGGradientElement from './CSVGGradientElement';

export default class CSVGRadialGradientElement extends CSVGGradientElement<SVGRadialGradientElement> {
  public el?: SVGRadialGradientElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'radialGradient',
      } as SVGRadialGradientElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'radialGradient',
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

  public fr(value: string) {
    this.el?.setAttribute('fr', value);
    return this;
  }

  public fx(value: string) {
    this.el?.setAttribute('fx', value);
    return this;
  }

  public fy(value: string) {
    this.el?.setAttribute('fy', value);
    return this;
  }

  public r(value: string) {
    this.el?.setAttribute('r', value);
    return this;
  }

  public spreadMethod(value: string) {
    this.el?.setAttribute('spreadMethod', value);
    return this;
  }

  public gradientTransform(value: string) {
    this.el?.setAttribute('gradientTransform', value);
    return this;
  }

  public href(value: string) {
    this.el?.setAttribute('href', value);
    this.el?.setAttributeNS('http://www.w3.org/1999/xlink', 'href', value);
    return this;
  }

  public gradientUnits(value: string) {
    this.el?.setAttribute('gradientUnits', value);
    return this;
  }
}

export function radialGradient() {
  return new CSVGRadialGradientElement();
}
