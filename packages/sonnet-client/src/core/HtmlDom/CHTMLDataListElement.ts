import CHTMLElement from './CHTMLElement';

class CHTMLDataListElement extends CHTMLElement<HTMLDataListElement> {
  public el: HTMLDataListElement;

  constructor() {
    super();
    const html = document.createElement('datalist');
    this.el = html;
  }
}

export function datalist() {
  return new CHTMLDataListElement();
}
