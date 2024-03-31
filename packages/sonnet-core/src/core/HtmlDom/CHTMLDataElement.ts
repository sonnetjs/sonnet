import CHTMLElement from './CHTMLElement';

class CHTMLDataElement extends CHTMLElement<HTMLDataElement> {
  public el: HTMLDataElement;

  constructor() {
    super();
    const html = document.createElement('data');
    this.el = html;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function data() {
  return new CHTMLDataElement();
}
