import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLOutputElement extends CHTMLElement<HTMLOutputElement> {
  public el: HTMLOutputElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'output',
      } as HTMLOutputElement;
    } else {
      this.el = document.createElement('output');
    }
  }

  public defaultValue(value: string) {
    this.el.defaultValue = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function output() {
  return new CHTMLOutputElement();
}
