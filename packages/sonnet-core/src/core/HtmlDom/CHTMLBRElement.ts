import CHTMLElement from './CHTMLElement';

class CHTMLBRElement extends CHTMLElement<HTMLBRElement> {
  public el: HTMLBRElement;

  constructor() {
    super();
    const html = document.createElement('br');
    this.el = html;
  }
}

export function br() {
  return new CHTMLBRElement();
}
