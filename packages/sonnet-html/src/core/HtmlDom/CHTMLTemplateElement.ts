import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTemplateElement extends CHTMLElement<HTMLTemplateElement> {
  public el: HTMLTemplateElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'template',
      } as HTMLTemplateElement;
    } else {
      this.el = document.createElement('template');
    }
  }
}

export function template() {
  return new CHTMLTemplateElement();
}
