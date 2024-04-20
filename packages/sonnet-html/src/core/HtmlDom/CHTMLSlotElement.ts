import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLSlotElement extends CHTMLElement<HTMLSlotElement> {
  public el: HTMLSlotElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'slot',
      } as HTMLSlotElement;
    } else {
      this.el = document.createElement('slot');
    }
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }
}

export function slot() {
  return new CHTMLSlotElement();
}
