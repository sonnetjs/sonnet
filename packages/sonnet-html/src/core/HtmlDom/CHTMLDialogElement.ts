import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDialogElement extends CHTMLElement<HTMLDialogElement> {
  public el: HTMLDialogElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'dialog',
      } as HTMLDialogElement;
    } else {
      this.el = document.createElement('dialog');
    }
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
