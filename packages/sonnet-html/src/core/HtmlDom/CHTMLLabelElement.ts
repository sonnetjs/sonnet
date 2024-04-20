import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLLabelElement extends CHTMLElement<HTMLLabelElement> {
  public el: HTMLLabelElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'label',
      } as HTMLLabelElement;
    } else {
      this.el = document.createElement('label');
    }
  }

  public htmlFor(value: string) {
    this.el.htmlFor = value;
    return this;
  }
}

export function label() {
  return new CHTMLLabelElement();
}
