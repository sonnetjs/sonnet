import CHTMLElement from './CHTMLElement';

class CHTMLHtmlElement extends CHTMLElement<HTMLHtmlElement> {
  public el: HTMLHtmlElement;

  constructor() {
    super();
    const html = document.createElement('html');
    this.el = html;
  }

  public version(version: string) {
    this.el.version = version;
    return this;
  }
}

export function html() {
  return new CHTMLHtmlElement();
}
