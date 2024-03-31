import CHTMLElement from './CHTMLElement';

class CHTMLUListElement extends CHTMLElement<HTMLUListElement> {
  public el: HTMLUListElement;

  constructor() {
    super();
    const html = document.createElement('ul');
    this.el = html;
  }
}

export function ul() {
  return new CHTMLUListElement();
}
