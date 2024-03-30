import CHTMLElement from './CHTMLElement';

class CHTMLStyleElement extends CHTMLElement<HTMLStyleElement> {
  public el: HTMLStyleElement;

  constructor() {
    super();
    const html = document.createElement('style');
    this.el = html;
  }

  public media(value: string) {
    this.el.media = value;
    return this;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }
}

export function style() {
  return new CHTMLStyleElement();
}
