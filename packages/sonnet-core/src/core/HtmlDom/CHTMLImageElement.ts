import CHTMLElement from './CHTMLElement';

class CHTMLImageElement extends CHTMLElement<HTMLImageElement> {
  public el: HTMLImageElement;

  constructor() {
    super();
    const html = document.createElement('img');
    this.el = html;
  }

  public alt(alt: string) {
    this.el.alt = alt;
    return this;
  }

  public crossOrigin(value: string) {
    this.el.crossOrigin = value;
    return this;
  }

  public decoding(value: 'async' | 'sync' | 'auto') {
    this.el.decoding = value;
    return this;
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public isMap(value: boolean) {
    this.el.isMap = value;
    return this;
  }

  public loading(value: 'eager' | 'lazy') {
    this.el.loading = value;
    return this;
  }

  public referrerPolicy(value: string) {
    this.el.referrerPolicy = value;
    return this;
  }

  public sizes(value: string) {
    this.el.sizes = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public srcset(value: string) {
    this.el.srcset = value;
    return this;
  }

  public useMap(value: string) {
    this.el.useMap = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }
}

export function img() {
  return new CHTMLImageElement();
}
