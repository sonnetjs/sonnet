import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGSVGElement extends CSVGGraphicsElement<SVGSVGElement> {
  public el?: SVGSVGElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'svg',
      } as SVGSVGElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    }
  }

  public baseProfile(baseProfile: string) {
    this.el?.setAttribute('baseProfile', baseProfile);
    return this;
  }

  public version(version: string) {
    this.el?.setAttribute('version', version);
    return this;
  }

  public width(width: string) {
    this.el?.setAttribute('width', width);
    return this;
  }

  public height(height: string) {
    this.el?.setAttribute('height', height);
    return this;
  }

  public viewBox(value: string) {
    this.el?.setAttribute('viewBox', value);
    return this;
  }

  public preserveAspectRatio(value: string) {
    this.el?.setAttribute('preserveAspectRation', value);
    return this;
  }

  public x(x: string) {
    this.el?.setAttribute('x', x);
    return this;
  }

  public y(y: string) {
    this.el?.setAttribute('y', y);
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

export function svg() {
  return new CSVGSVGElement();
}
