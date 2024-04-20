import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLBRElement extends CHTMLElement<HTMLBRElement> {
  public el: HTMLBRElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'br',
      } as HTMLBRElement;
    } else {
      this.el = document.createElement('br');
    }
  }
}

export function br() {
  return new CHTMLBRElement();
}
