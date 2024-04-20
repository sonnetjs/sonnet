import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLFieldSetElement extends CHTMLElement<HTMLFieldSetElement> {
  public el: HTMLFieldSetElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'fieldset',
      } as HTMLFieldSetElement;
    } else {
      this.el = document.createElement('fieldset');
    }
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
