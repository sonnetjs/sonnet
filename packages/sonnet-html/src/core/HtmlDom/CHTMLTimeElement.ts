import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTimeElement extends CHTMLElement<HTMLTimeElement> {
  public el: HTMLTimeElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'time',
      } as HTMLTimeElement;
    } else {
      this.el = document.createElement('time');
    }
  }
}

export function time() {
  return new CHTMLTimeElement();
}
