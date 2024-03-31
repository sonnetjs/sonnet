import CHTMLElement from './CHTMLElement';

class CHTMLPictureElement extends CHTMLElement<HTMLPictureElement> {
  public el: HTMLPictureElement;

  constructor() {
    super();
    const html = document.createElement('picture');
    this.el = html;
  }
}

export function picture() {
  return new CHTMLPictureElement();
}
