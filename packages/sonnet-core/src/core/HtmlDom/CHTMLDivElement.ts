import CHTMLElement from './CHTMLElement';

class CHTMLDivElement extends CHTMLElement<HTMLDivElement> {
  public el: HTMLDivElement;

  constructor() {
    super();
    const html = document.createElement('div');
    this.el = html;
  }
}

export function div() {
  return new CHTMLDivElement();
}
