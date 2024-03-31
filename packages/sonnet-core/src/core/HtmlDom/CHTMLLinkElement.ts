import CHTMLElement from './CHTMLElement';

class CHTMLLinkElement extends CHTMLElement<HTMLLinkElement> {
  public el: HTMLLinkElement;

  constructor() {
    super();
    const html = document.createElement('link');
    this.el = html;
  }

  public as(value: string) {
    this.el.as = value;
    return this;
  }

  public crossOrigin(value: string) {
    this.el.crossOrigin = value;
    return this;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public href(value: string) {
    this.el.href = value;
    return this;
  }

  public hreflang(value: string) {
    this.el.hreflang = value;
    return this;
  }

  public media(value: string) {
    this.el.media = value;
    return this;
  }

  public referrerPolicy(value: string) {
    this.el.referrerPolicy = value;
    return this;
  }

  public rel(value: string) {
    this.el.rel = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }
}

export function link() {
  return new CHTMLLinkElement();
}
