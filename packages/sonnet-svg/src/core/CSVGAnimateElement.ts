import { isServer } from '@sonnetjs/shared';
import CSVGAnimationElement from './CSVGAnimationElement';

export default class CSVGAnimateElement extends CSVGAnimationElement<SVGAnimateElement> {
  public el?: SVGAnimateElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'animate',
      } as SVGAnimateElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'animate',
      );
    }
  }

  public animate(value: string) {
    this.el?.setAttribute('animate', value);
    return this;
  }

  public attributeName(value: string) {
    this.el?.setAttribute('attributeName', value);
    return this;
  }

  public attributeType(value: string) {
    this.el?.setAttribute('attributeType', value);
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

export function animate() {
  return new CSVGAnimateElement();
}
