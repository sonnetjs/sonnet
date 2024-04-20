import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLHtmlElement extends CHTMLElement<HTMLHtmlElement> {
  public el: HTMLHtmlElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'html',
      } as HTMLHtmlElement;
    } else {
      this.el = document.createElement('html');
    }
  }

  public version(version: string) {
    this.el.version = version;
    return this;
  }
}

export function html() {
  return new CHTMLHtmlElement();
}
