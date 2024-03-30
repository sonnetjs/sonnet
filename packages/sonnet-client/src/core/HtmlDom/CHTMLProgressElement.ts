import CHTMLElement from './CHTMLElement';

class CHTMLProgressElement extends CHTMLElement<HTMLProgressElement> {
  public el: HTMLProgressElement;

  constructor() {
    super();
    const html = document.createElement('progress');
    this.el = html;
  }

  public max(value: number) {
    this.el.max = value;
    return this;
  }

  public value(value: number) {
    this.el.value = value;
    return this;
  }
}

export function progress() {
  return new CHTMLProgressElement();
}
