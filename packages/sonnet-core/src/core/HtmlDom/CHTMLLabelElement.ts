import CHTMLElement from './CHTMLElement';

class CHTMLLabelElement extends CHTMLElement<HTMLLabelElement> {
  public el: HTMLLabelElement;

  constructor() {
    super();
    const html = document.createElement('label');
    this.el = html;
  }

  public htmlFor(value: string) {
    this.el.htmlFor = value;
    return this;
  }
}

export function label() {
  return new CHTMLLabelElement();
}
