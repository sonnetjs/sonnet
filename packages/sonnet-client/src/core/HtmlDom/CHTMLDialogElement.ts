import CHTMLElement from './CHTMLElement';

class CHTMLDialogElement extends CHTMLElement<HTMLDialogElement> {
  public el: HTMLDialogElement;

  constructor() {
    super();
    const html = document.createElement('dialog');
    this.el = html;
  }

  public open(value: boolean = true) {
    this.el.open = value;
    return this;
  }

  public returnValue(value: string) {
    this.el.returnValue = value;
    return this;
  }
}

export function dialog() {
  return new CHTMLDialogElement();
}
