import { isServer } from '@sonnetjs/shared';
import CSVGAnimationElement from './CSVGAnimationElement';

export default class CSVGSetElement extends CSVGAnimationElement<SVGSetElement> {
  public el?: SVGSetElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'set',
      } as SVGSetElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'set');
    }
  }

  public to(value: string) {
    this.el?.setAttribute('to', value);
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

  public begin(value: string) {
    this.el?.setAttribute('begin', value);
    return this;
  }

  public dur(value: string) {
    this.el?.setAttribute('dur', value);
    return this;
  }

  public end(value: string) {
    this.el?.setAttribute('end', value);
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

  public keyPoints(value: string) {
    this.el?.setAttribute('keyPoints', value);
    return this;
  }

  public max(value: string) {
    this.el?.setAttribute('max', value);
    return this;
  }

  public min(value: string) {
    this.el?.setAttribute('min', value);
    return this;
  }

  public repeatCount(value: string) {
    this.el?.setAttribute('repeatCount', value);
    return this;
  }

  public repeatDur(value: string) {
    this.el?.setAttribute('repeatDur', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }
}

export function set() {
  return new CSVGSetElement();
}
