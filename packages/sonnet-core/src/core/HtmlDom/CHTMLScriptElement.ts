import CHTMLElement from './CHTMLElement';

class CHTMLScriptElement extends CHTMLElement<HTMLScriptElement> {
  public el: HTMLScriptElement;

  constructor() {
    super();
    const html = document.createElement('script');
    this.el = html;
  }

  public async(value: boolean) {
    this.el.async = value;
    return this;
  }

  public defer(value: boolean) {
    this.el.defer = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public crossOrigin(value: string) {
    this.el.crossOrigin = value;
    return this;
  }

  public text(value: string) {
    this.el.text = value;
    return this;
  }

  public noModule(value: boolean) {
    this.el.noModule = value;
    return this;
  }

  public referrerPolicy(value: string) {
    this.el.referrerPolicy = value;
    return this;
  }
}

export function script() {
  return new CHTMLScriptElement();
}
