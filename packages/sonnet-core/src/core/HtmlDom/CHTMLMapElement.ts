import CHTMLElement from './CHTMLElement';

class CHTMLMapElement extends CHTMLElement<HTMLMapElement> {
  public el: HTMLMapElement;

  constructor() {
    super();
    const html = document.createElement('map');
    this.el = html;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }
}

export function map() {
  return new CHTMLMapElement();
}
