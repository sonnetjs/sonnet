import CHTMLElement from './CHTMLElement';

class CHTMLDetailsElement extends CHTMLElement<HTMLDetailsElement> {
  public el: HTMLDetailsElement;

  constructor() {
    super();
    const html = document.createElement('details');
    this.el = html;
  }

  public open(value: boolean = true) {
    this.el.open = value;
    return this;
  }
}

export function details() {
  return new CHTMLDetailsElement();
}
