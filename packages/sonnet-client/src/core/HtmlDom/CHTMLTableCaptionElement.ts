import CHTMLElement from './CHTMLElement';

class CHTMLTableCaptionElement extends CHTMLElement<HTMLTableCaptionElement> {
  public el: HTMLTableCaptionElement;

  constructor() {
    super();
    const html = document.createElement('caption');
    this.el = html;
  }
}

export function caption() {
  return new CHTMLTableCaptionElement();
}
