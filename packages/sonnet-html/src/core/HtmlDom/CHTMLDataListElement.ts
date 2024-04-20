import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLDataListElement extends CHTMLElement<HTMLDataListElement> {
  public el: HTMLDataListElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'datalist',
      } as HTMLDataListElement;
    } else {
      this.el = document.createElement('datalist');
    }
  }
}

export function datalist() {
  return new CHTMLDataListElement();
}
