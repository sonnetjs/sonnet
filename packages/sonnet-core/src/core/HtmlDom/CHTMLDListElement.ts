import CHTMLElement from './CHTMLElement';

class CHTMLDListElement extends CHTMLElement<HTMLDListElement> {
  public el: HTMLDListElement;

  constructor() {
    super();
    const html = document.createElement('dl');
    this.el = html;
  }
}

export function dl() {
  return new CHTMLDListElement();
}
