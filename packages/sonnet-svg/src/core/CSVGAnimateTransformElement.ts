import { isServer } from '@sonnetjs/shared';
import CSVGAnimationElement from './CSVGAnimationElement';

export default class CSVGAnimateElementTransform extends CSVGAnimationElement<SVGAnimateTransformElement> {
  public el?: SVGAnimateTransformElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'animateTransform',
      } as SVGAnimateTransformElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'animateTransform',
      );
    }
  }

  public attributeName(value: string) {
    this.el?.setAttribute('attributeName', value);
    return this;
  }

  public attributeType(value: string) {
    this.el?.setAttribute('attributeType', value);
    return this;
  }

  public type(value: string) {
    this.el?.setAttribute('type', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:type',
      value,
    );
    return this;
  }

  public dur(value: string) {
    this.el?.setAttribute('dur', value);
    return this;
  }

  public repeatCount(value: string) {
    this.el?.setAttribute('repeatCount', value);
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

export function animateTransform() {
  return new CSVGAnimateElementTransform();
}
