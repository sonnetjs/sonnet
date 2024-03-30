import CHTMLElement from './CHTMLElement';

class CHTMLEmbedElement extends CHTMLElement<HTMLEmbedElement> {
  public el: HTMLEmbedElement;

  constructor() {
    super();
    const html = document.createElement('embed');
    this.el = html;
  }

  public height(value: string) {
    this.el.height = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public width(value: string) {
    this.el.width = value;
    return this;
  }
}

export function embed() {
  return new CHTMLEmbedElement();
}
