import CHTMLElement from './CHTMLElement';

class CHTMLMenuElement extends CHTMLElement<HTMLMenuElement> {
  public el: HTMLMenuElement;

  constructor() {
    super();
    const html = document.createElement('menu');
    this.el = html;
  }
}

export function menu() {
  return new CHTMLMenuElement();
}
