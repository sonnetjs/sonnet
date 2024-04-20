import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDetailsElement extends CHTMLElement<HTMLDetailsElement> {
  public el: HTMLDetailsElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'details',
      } as HTMLDetailsElement;
    } else {
      this.el = document.createElement('details');
    }
  }

  public open(value: boolean = true) {
    this.el.open = value;
    return this;
  }
}

export function details() {
  return new CHTMLDetailsElement();
}
