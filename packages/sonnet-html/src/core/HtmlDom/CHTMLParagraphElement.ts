import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLParagraphElement extends CHTMLElement<HTMLParagraphElement> {
  public el: HTMLParagraphElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'p',
      } as HTMLParagraphElement;
    } else {
      this.el = document.createElement('p');
    }
  }
}

export function p() {
  return new CHTMLParagraphElement();
}
