import CHTMLElement from './CHTMLElement';

class CHTMLHeadElement extends CHTMLElement<HTMLHeadElement> {
  public el: HTMLHeadElement;

  constructor() {
    super();
    const html = document.createElement('head');
    this.el = html;
  }
}

export function head() {
  return new CHTMLHeadElement();
}
