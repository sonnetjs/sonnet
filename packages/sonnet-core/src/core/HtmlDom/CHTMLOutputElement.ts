import CHTMLElement from './CHTMLElement';

class CHTMLOutputElement extends CHTMLElement<HTMLOutputElement> {
  public el: HTMLOutputElement;

  constructor() {
    super();
    const html = document.createElement('output');
    this.el = html;
  }

  public defaultValue(value: string) {
    this.el.defaultValue = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function output() {
  return new CHTMLOutputElement();
}
