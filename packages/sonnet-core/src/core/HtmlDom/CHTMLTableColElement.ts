import CHTMLElement from './CHTMLElement';

class CHTMLTableColElement extends CHTMLElement<HTMLTableColElement> {
  public el: HTMLTableColElement;

  constructor(tag: 'col' | 'colgroup') {
    super();
    const html = document.createElement(tag);
    this.el = html;
  }

  public span(value: number) {
    this.el.span = value;
    return this;
  }
}

export function col() {
  return new CHTMLTableColElement('col');
}

export function colgroup() {
  return new CHTMLTableColElement('colgroup');
}
