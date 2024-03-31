import CHTMLElement from './CHTMLElement';

class CHTMLTableRowElement extends CHTMLElement<HTMLTableRowElement> {
  public el: HTMLTableRowElement;

  constructor() {
    super();
    const html = document.createElement('tr');
    this.el = html;
  }
}

export function tr() {
  return new CHTMLTableRowElement();
}
