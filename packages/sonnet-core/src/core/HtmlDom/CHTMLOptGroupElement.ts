import CHTMLElement from './CHTMLElement';

class CHTMLOptGroupElement extends CHTMLElement<HTMLOptGroupElement> {
  public el: HTMLOptGroupElement;

  constructor() {
    super();
    const html = document.createElement('optgroup');
    this.el = html;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public label(value: string) {
    this.el.label = value;
    return this;
  }
}

export function optgroup() {
  return new CHTMLOptGroupElement();
}
