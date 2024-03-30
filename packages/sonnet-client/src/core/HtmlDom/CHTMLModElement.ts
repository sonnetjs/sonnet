import CHTMLElement from './CHTMLElement';

class CHTMLModElement extends CHTMLElement<HTMLModElement> {
  public el: HTMLModElement;

  constructor(tag: 'del' | 'ins') {
    super();
    const html = document.createElement(tag);
    this.el = html;
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
