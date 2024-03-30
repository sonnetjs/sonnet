import CHTMLElement from './CHTMLElement';

class CHTMLCanvasElement extends CHTMLElement<HTMLCanvasElement> {
  public el: HTMLCanvasElement;

  constructor() {
    super();
    const html = document.createElement('canvas');
    this.el = html;
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }
}

export function canvas() {
  return new CHTMLCanvasElement();
}
