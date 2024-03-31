import CHTMLElement from './CHTMLElement';

class CHTMLOListElement extends CHTMLElement<HTMLOListElement> {
  public el: HTMLOListElement;

  constructor() {
    super();
    const html = document.createElement('ol');
    this.el = html;
  }

  public reversed(value: boolean) {
    this.el.reversed = value;
    return this;
  }

  public start(value: number) {
    this.el.start = value;
    return this;
  }

  public type(value: '1' | 'a' | 'A' | 'i' | 'I') {
    this.el.type = value;
    return this;
  }
}

export function ol() {
  return new CHTMLOListElement();
}
