import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTableRowElement extends CHTMLElement<HTMLTableRowElement> {
  public el: HTMLTableRowElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'tr',
      } as HTMLTableRowElement;
    } else {
      this.el = document.createElement('tr');
    }
  }
}

export function tr() {
  return new CHTMLTableRowElement();
}
