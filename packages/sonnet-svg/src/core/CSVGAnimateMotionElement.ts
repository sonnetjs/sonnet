import { isServer } from '@sonnetjs/shared';
import CSVGAnimationElement from './CSVGAnimationElement';

export default class CSVGAnimateMotionElement extends CSVGAnimationElement<SVGAnimateMotionElement> {
  public el?: SVGAnimateMotionElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'animateMotion',
      } as SVGAnimateMotionElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'animateMotion',
      );
    }
  }

  public calcMode(value: string) {
    this.el?.setAttribute('calcMode', value);
    return this;
  }

  public origin(value: string) {
    this.el?.setAttribute('origin', value);
    return this;
  }

  public path(value: string) {
    this.el?.setAttribute('path', value);
    return this;
  }

  public rotate(value: string) {
    this.el?.setAttribute('rotate', value);
    return this;
  }

  public href(value: string) {
    this.el?.setAttribute('href', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      value,
    );
    return this;
  }
}

export function animateMotion() {
  return new CSVGAnimateMotionElement();
}
