import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLBaseElement extends CHTMLElement<HTMLBaseElement> {
  public el: HTMLBaseElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'base',
      } as HTMLBaseElement;
    } else {
      this.el = document.createElement('base');
    }
  }

  public href(value: string) {
    this.el.href = value;
    return this;
  }

  public target(value: string) {
    this.el.target = value;
    return this;
  }
}

export function base() {
  return new CHTMLBaseElement();
}
