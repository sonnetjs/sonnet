import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLObjectElement extends CHTMLElement<HTMLObjectElement> {
  public el: HTMLObjectElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'object',
      } as HTMLObjectElement;
    } else {
      this.el = document.createElement('object');
    }
  }

  public data(value: string) {
    this.el.data = value;
    return this;
  }

  public height(value: string) {
    this.el.height = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public width(value: string) {
    this.el.width = value;
    return this;
  }
}

export function object() {
  return new CHTMLObjectElement();
}
