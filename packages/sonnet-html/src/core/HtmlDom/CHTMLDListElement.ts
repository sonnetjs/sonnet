import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDListElement extends CHTMLElement<HTMLDListElement> {
  public el: HTMLDListElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'dl',
      } as HTMLDListElement;
    } else {
      this.el = document.createElement('dl');
    }
  }
}

export function dl() {
  return new CHTMLDListElement();
}
