import CHTMLElement from './CHTMLElement';

class CHTMLParagraphElement extends CHTMLElement<HTMLParagraphElement> {
  public el: HTMLParagraphElement;

  constructor() {
    super();
    const html = document.createElement('p');
    this.el = html;
  }
}

export function p() {
  return new CHTMLParagraphElement();
}
