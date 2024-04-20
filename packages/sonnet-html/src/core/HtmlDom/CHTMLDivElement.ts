import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDivElement extends CHTMLElement<HTMLDivElement> {
  public el: HTMLDivElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'div',
      } as HTMLDivElement;
    } else {
      this.el = document.createElement('div');
    }
  }
}

export function div() {
  return new CHTMLDivElement();
}
