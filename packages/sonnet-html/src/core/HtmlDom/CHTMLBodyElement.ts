import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLBodyElement extends CHTMLElement<HTMLBodyElement> {
  public el: HTMLBodyElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'body',
      } as HTMLBodyElement;
    } else {
      this.el = document.createElement('body');
    }
  }
}

export function body() {
  return new CHTMLBodyElement();
}
