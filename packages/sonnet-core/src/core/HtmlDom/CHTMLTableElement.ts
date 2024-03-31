import CHTMLElement from './CHTMLElement';

class CHTMLTableElement extends CHTMLElement<HTMLTableElement> {
  public el: HTMLTableElement;

  constructor() {
    super();
    const html = document.createElement('table');
    this.el = html;
  }
}

export function table() {
  return new CHTMLTableElement();
}
