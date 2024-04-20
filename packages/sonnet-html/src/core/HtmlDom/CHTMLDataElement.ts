import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDataElement extends CHTMLElement<HTMLDataElement> {
  public el: HTMLDataElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'data',
      } as HTMLDataElement;
    } else {
      this.el = document.createElement('data');
    }
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function data() {
  return new CHTMLDataElement();
}
