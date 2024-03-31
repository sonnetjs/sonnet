import CHTMLElement from './CHTMLElement';

class CHTMLTimeElement extends CHTMLElement<HTMLTimeElement> {
  public el: HTMLTimeElement;

  constructor() {
    super();
    const html = document.createElement('time');
    this.el = html;
  }
}

export function time() {
  return new CHTMLTimeElement();
}
