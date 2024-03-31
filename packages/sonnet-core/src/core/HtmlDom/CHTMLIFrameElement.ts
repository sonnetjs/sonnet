import CHTMLElement from './CHTMLElement';

class CHTMLIFrameElement extends CHTMLElement<HTMLIFrameElement> {
  public el: HTMLIFrameElement;

  constructor() {
    super();
    const html = document.createElement('iframe');
    this.el = html;
  }

  public allow(value: string) {
    this.el.allow = value;
    return this;
  }

  public allowfullscreen(value: boolean) {
    this.el.allowFullscreen = value;
    return this;
  }

  public height(value: string) {
    this.el.height = value;
    return this;
  }

  public loading(value: string) {
    this.el.loading = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public referrerpolicy(
    value:
      | 'no-referrer'
      | 'no-referrer-when-downgrade'
      | 'origin'
      | 'origin-when-cross-origin'
      | 'same-origin'
      | 'strict-origin'
      | 'strict-origin-when-cross-origin'
      | 'unsafe-url',
  ) {
    this.el.referrerPolicy = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public srcdoc(value: string) {
    this.el.srcdoc = value;
    return this;
  }

  public width(value: string) {
    this.el.width = value;
    return this;
  }
}

export function iframe() {
  return new CHTMLIFrameElement();
}
