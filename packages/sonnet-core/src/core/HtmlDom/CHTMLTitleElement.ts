import CHTMLElement from './CHTMLElement';

class CHTMLTitleElement extends CHTMLElement<HTMLTitleElement> {
  public el: HTMLTitleElement;

  constructor() {
    super();
    const html = document.createElement('title');
    this.el = html;
  }

  public text(text: string) {
    this.el.text = text;
    return this;
  }
}

export function title() {
  return new CHTMLTitleElement();
}
