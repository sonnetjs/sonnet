import CHTMLElement from './CHTMLElement';

class CHTMLMetaElement extends CHTMLElement<HTMLMetaElement> {
  public el: HTMLMetaElement;

  constructor() {
    super();
    const html = document.createElement('meta');
    this.el = html;
  }

  public content(value: string) {
    this.el.content = value;
    return this;
  }

  public httpEquiv(value: string) {
    this.el.httpEquiv = value;
    return this;
  }

  public media(value: string) {
    this.el.media = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public scheme(value: string) {
    this.el.scheme = value;
    return this;
  }
}

export function meta() {
  return new CHTMLMetaElement();
}
