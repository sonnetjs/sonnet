import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLProgressElement extends CHTMLElement<HTMLProgressElement> {
  public el: HTMLProgressElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'progress',
      } as HTMLProgressElement;
    } else {
      this.el = document.createElement('progress');
    }
  }

  public max(value: number) {
    this.el.max = value;
    return this;
  }

  public value(value: number) {
    this.el.value = value;
    return this;
  }
}

export function progress() {
  return new CHTMLProgressElement();
}
