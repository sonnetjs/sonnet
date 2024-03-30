import CHTMLElement from './CHTMLElement';

class CHTMLTemplateElement extends CHTMLElement<HTMLTemplateElement> {
  public el: HTMLTemplateElement;

  constructor() {
    super();
    const html = document.createElement('template');
    this.el = html;
  }
}

export function template() {
  return new CHTMLTemplateElement();
}
