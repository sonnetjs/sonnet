import CHTMLElement from './CHTMLElement';

class CHTMLObjectElement extends CHTMLElement<HTMLObjectElement> {
  public el: HTMLObjectElement;

  constructor() {
    super();
    const html = document.createElement('object');
    this.el = html;
  }

  public data(value: string) {
    this.el.data = value;
    return this;
  }

  public height(value: string) {
    this.el.height = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public width(value: string) {
    this.el.width = value;
    return this;
  }
}

export function object() {
  return new CHTMLObjectElement();
}
