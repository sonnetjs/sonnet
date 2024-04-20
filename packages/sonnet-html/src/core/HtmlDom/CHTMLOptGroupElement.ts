import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLOptGroupElement extends CHTMLElement<HTMLOptGroupElement> {
  public el: HTMLOptGroupElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'optgroup',
      } as HTMLOptGroupElement;
    } else {
      this.el = document.createElement('optgroup');
    }
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public label(value: string) {
    this.el.label = value;
    return this;
  }
}

export function optgroup() {
  return new CHTMLOptGroupElement();
}
