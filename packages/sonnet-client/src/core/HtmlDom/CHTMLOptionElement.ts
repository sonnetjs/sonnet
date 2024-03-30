import CHTMLElement from './CHTMLElement';

class CHTMLOptionElement extends CHTMLElement<HTMLOptionElement> {
  public el: HTMLOptionElement;

  constructor() {
    super();
    const html = document.createElement('option');
    this.el = html;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public defaultSelected(value: boolean) {
    this.el.defaultSelected = value;
    return this;
  }

  public label(value: string) {
    this.el.label = value;
    return this;
  }

  public selected(value: boolean) {
    this.el.selected = value;
    return this;
  }

  public text(value: string) {
    this.el.text = value;
    return this;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function option() {
  return new CHTMLOptionElement();
}
