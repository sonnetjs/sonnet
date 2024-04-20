import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLPreElement extends CHTMLElement<HTMLPreElement> {
  public el: HTMLPreElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'pre',
      } as HTMLPreElement;
    } else {
      this.el = document.createElement('pre');
    }
  }
}

export function pre() {
  return new CHTMLPreElement();
}
