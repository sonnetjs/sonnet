import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLQuoteElement extends CHTMLElement<HTMLQuoteElement> {
  public el: HTMLQuoteElement;

  constructor(tag: 'blockquote' | 'q') {
    super();
    if (isServer()) {
      this.el = {
        tagName: tag,
      } as HTMLQuoteElement;
    } else {
      this.el = document.createElement(tag);
    }
  }

  public cite(cite: string) {
    this.el.cite = cite;
    return this;
  }
}

export function blockquote() {
  return new CHTMLQuoteElement('blockquote');
}

export function q() {
  return new CHTMLQuoteElement('q');
}
