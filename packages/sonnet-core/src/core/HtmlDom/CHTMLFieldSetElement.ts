import CHTMLElement from './CHTMLElement';

class CHTMLFieldSetElement extends CHTMLElement<HTMLFieldSetElement> {
  public el: HTMLFieldSetElement;

  constructor() {
    super();
    const html = document.createElement('fieldset');
    this.el = html;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }
}

export function fieldset() {
  return new CHTMLFieldSetElement();
}
