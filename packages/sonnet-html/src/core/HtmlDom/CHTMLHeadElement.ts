import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLHeadElement extends CHTMLElement<HTMLHeadElement> {
  public el: HTMLHeadElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'head',
      } as HTMLHeadElement;
    } else {
      this.el = document.createElement('head');
    }
  }
}

export function head() {
  return new CHTMLHeadElement();
}
