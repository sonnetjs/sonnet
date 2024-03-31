import CHTMLElement from './CHTMLElement';

class CHTMLLIElement extends CHTMLElement<HTMLLIElement> {
  public el: HTMLLIElement;

  constructor() {
    super();
    const html = document.createElement('li');
    this.el = html;
  }

  public value(value: string) {
    this.el.innerText = value;
    return this;
  }
}

export function li() {
  return new CHTMLLIElement();
}
