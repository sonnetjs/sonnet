import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLTitleElement extends CHTMLElement<HTMLTitleElement> {
  public el: HTMLTitleElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'title',
      } as HTMLTitleElement;
    } else {
      this.el = document.createElement('title');
    }
  }

  public text(text: string) {
    this.el.text = text;
    return this;
  }
}

export function title() {
  return new CHTMLTitleElement();
}
