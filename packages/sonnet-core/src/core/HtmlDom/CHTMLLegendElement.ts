import CHTMLElement from './CHTMLElement';

class CHTMLLegendElement extends CHTMLElement<HTMLLegendElement> {
  public el: HTMLLegendElement;

  constructor() {
    super();
    const html = document.createElement('legend');
    this.el = html;
  }
}

export function legend() {
  return new CHTMLLegendElement();
}
