import CHTMLElement from './CHTMLElement';

class CHTMLQuoteElement extends CHTMLElement<HTMLQuoteElement> {
  public el: HTMLQuoteElement;

  constructor(tag: 'blockquote' | 'q') {
    super();
    const html = document.createElement(tag);
    this.el = html;
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
