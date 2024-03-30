import CHTMLElement from './CHTMLElement';

class CHTMLTableCaptionElement extends CHTMLElement<HTMLTableCaptionElement> {
  public el: HTMLTableCaptionElement;

  constructor(tag: 'thead' | 'tbody' | 'tfoot') {
    super();
    const html = document.createElement(tag);
    this.el = html;
  }
}

export function thead() {
  return new CHTMLTableCaptionElement('thead');
}

export function tbody() {
  return new CHTMLTableCaptionElement('tbody');
}

export function tfoot() {
  return new CHTMLTableCaptionElement('tfoot');
}
