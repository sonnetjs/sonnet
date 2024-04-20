import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLLIElement extends CHTMLElement<HTMLLIElement> {
  public el: HTMLLIElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'li',
      } as HTMLLIElement;
    } else {
      this.el = document.createElement('li');
    }
  }

  public value(value: string) {
    this.el.innerText = value;
    return this;
  }
}

export function li() {
  return new CHTMLLIElement();
}
