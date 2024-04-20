import { isServer } from '@sonnetjs/shared';
import CSVGTextContentElement from './CSVGTextContentElement';

export default class CSVGTextPathElement extends CSVGTextContentElement<SVGTextPathElement> {
  public el?: SVGTextPathElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'textPath',
      } as SVGTextPathElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'textPath',
      );
    }
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

  public startOffset(value: string) {
    this.el?.setAttribute('startOffset', value);
    return this;
  }

  public method(value: string) {
    this.el?.setAttribute('method', value);
    return this;
  }

  public spacing(value: string) {
    this.el?.setAttribute('spacing', value);
    return this;
  }

  public side(value: string) {
    this.el?.setAttribute('side', value);
    return this;
  }

  public textLength(value: string) {
    this.el?.setAttribute('textLength', value);
    return this;
  }

  public lengthAdjust(value: string) {
    this.el?.setAttribute('lengthAdjust', value);
    return this;
  }

  public path(value: string) {
    this.el?.setAttribute('path', value);
    return this;
  }

  public baselineShift(value: string) {
    this.el?.setAttribute('baselineShift', value);
    return this;
  }
}

export function textPath() {
  return new CSVGTextPathElement();
}
