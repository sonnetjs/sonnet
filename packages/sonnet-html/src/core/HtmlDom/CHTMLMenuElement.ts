import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLMenuElement extends CHTMLElement<HTMLMenuElement> {
  public el: HTMLMenuElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'menu',
      } as HTMLMenuElement;
    } else {
      this.el = document.createElement('menu');
    }
  }
}

export function menu() {
  return new CHTMLMenuElement();
}
