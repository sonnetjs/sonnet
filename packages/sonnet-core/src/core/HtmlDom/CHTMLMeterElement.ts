import CHTMLElement from './CHTMLElement';

class CHTMLMeterElement extends CHTMLElement<HTMLMeterElement> {
  public el: HTMLMeterElement;

  constructor() {
    super();
    const html = document.createElement('meter');
    this.el = html;
  }

  public high(value: number) {
    this.el.high = value;
    return this;
  }

  public low(value: number) {
    this.el.low = value;
    return this;
  }

  public max(value: number) {
    this.el.max = value;
    return this;
  }

  public min(value: number) {
    this.el.min = value;
    return this;
  }

  public optimum(value: number) {
    this.el.optimum = value;
    return this;
  }

  public value(value: number) {
    this.el.value = value;
    return this;
  }
}

export function meter() {
  return new CHTMLMeterElement();
}
