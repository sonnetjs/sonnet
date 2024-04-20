import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTableCaptionElement extends CHTMLElement<HTMLTableCaptionElement> {
  public el: HTMLTableCaptionElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'caption',
      } as HTMLTableCaptionElement;
    } else {
      this.el = document.createElement('caption');
    }
  }
}

export function caption() {
  return new CHTMLTableCaptionElement();
}
