import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLModElement extends CHTMLElement<HTMLModElement> {
  public el: HTMLModElement;

  constructor(tag: 'del' | 'ins') {
    super();
    if (isServer()) {
      this.el = {
        tagName: tag,
      } as HTMLModElement;
    } else {
      this.el = document.createElement(tag);
    }
  }

  public cite(value: string) {
    this.el.cite = value;
    return this;
  }

  public dateTime(value: string) {
    this.el.dateTime = value;
    return this;
  }
}

export function del() {
  return new CHTMLModElement('del');
}

export function ins() {
  return new CHTMLModElement('ins');
}
