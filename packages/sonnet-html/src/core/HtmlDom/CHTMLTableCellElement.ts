import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTableCellElement extends CHTMLElement<HTMLTableCellElement> {
  public el: HTMLTableCellElement;

  constructor(tag: 'th' | 'td') {
    super();
    if (isServer()) {
      this.el = {
        tagName: tag,
      } as HTMLTableCellElement;
    } else {
      this.el = document.createElement(tag);
    }
  }

  public abbr(value: string) {
    this.el.abbr = value;
    return this;
  }

  public colspan(value: number) {
    this.el.colSpan = value;
    return this;
  }

  public rowspan(value: number) {
    this.el.rowSpan = value;
    return this;
  }

  public scope(value: string) {
    this.el.scope = value;
    return this;
  }
}

export function td() {
  return new CHTMLTableCellElement('td');
}

export function th() {
  return new CHTMLTableCellElement('th');
}
