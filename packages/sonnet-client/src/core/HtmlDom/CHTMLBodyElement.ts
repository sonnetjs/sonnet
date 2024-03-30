import CHTMLElement from './CHTMLElement';

class CHTMLBodyElement extends CHTMLElement<HTMLBodyElement> {
  public el: HTMLBodyElement;

  constructor() {
    super();
    const html = document.createElement('body');
    this.el = html;
  }
}

export function body() {
  return new CHTMLBodyElement();
}
