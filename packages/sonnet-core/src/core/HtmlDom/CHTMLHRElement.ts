import CHTMLElement from './CHTMLElement';

class CHTMLHRElement extends CHTMLElement<HTMLHRElement> {
  public el: HTMLHRElement;

  constructor() {
    super();
    const html = document.createElement('hr');
    this.el = html;
  }
}

export function hr() {
  return new CHTMLHRElement();
}
