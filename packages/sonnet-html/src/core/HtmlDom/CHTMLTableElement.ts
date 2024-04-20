import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTableElement extends CHTMLElement<HTMLTableElement> {
  public el: HTMLTableElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'table',
      } as HTMLTableElement;
    } else {
      this.el = document.createElement('table');
    }
  }
}

export function table() {
  return new CHTMLTableElement();
}
