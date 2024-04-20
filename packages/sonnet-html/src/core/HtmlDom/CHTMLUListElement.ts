import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLUListElement extends CHTMLElement<HTMLUListElement> {
  public el: HTMLUListElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'ul',
      } as HTMLUListElement;
    } else {
      this.el = document.createElement('ul');
    }
  }
}

export function ul() {
  return new CHTMLUListElement();
}
