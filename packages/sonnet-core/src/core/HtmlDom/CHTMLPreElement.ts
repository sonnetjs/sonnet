import CHTMLElement from './CHTMLElement';

class CHTMLPreElement extends CHTMLElement<HTMLPreElement> {
  public el: HTMLPreElement;

  constructor() {
    super();
    const html = document.createElement('pre');
    this.el = html;
  }
}

export function pre() {
  return new CHTMLPreElement();
}
