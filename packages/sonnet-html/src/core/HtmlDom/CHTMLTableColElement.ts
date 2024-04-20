import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTableColElement extends CHTMLElement<HTMLTableColElement> {
  public el: HTMLTableColElement;

  constructor(tag: 'col' | 'colgroup') {
    super();
    if (isServer()) {
      this.el = {
        tagName: tag,
      } as HTMLTableColElement;
    } else {
      this.el = document.createElement(tag);
    }
  }

  public span(value: number) {
    this.el.span = value;
    return this;
  }
}

export function col() {
  return new CHTMLTableColElement('col');
}

export function colgroup() {
  return new CHTMLTableColElement('colgroup');
}
