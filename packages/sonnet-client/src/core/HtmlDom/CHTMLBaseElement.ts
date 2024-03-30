import CHTMLElement from './CHTMLElement';

class CHTMLBaseElement extends CHTMLElement<HTMLBaseElement> {
  public el: HTMLBaseElement;

  constructor() {
    super();
    const html = document.createElement('base');
    this.el = html;
  }

  public href(value: string) {
    this.el.href = value;
    return this;
  }

  public target(value: string) {
    this.el.target = value;
    return this;
  }
}

export function base() {
  return new CHTMLBaseElement();
}
