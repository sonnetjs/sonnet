import CHTMLElement from './CHTMLElement';

class CHTMLSlotElement extends CHTMLElement<HTMLSlotElement> {
  public el: HTMLSlotElement;

  constructor() {
    super();
    const html = document.createElement('slot');
    this.el = html;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }
}

export function slot() {
  return new CHTMLSlotElement();
}
