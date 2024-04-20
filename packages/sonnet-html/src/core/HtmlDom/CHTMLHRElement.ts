import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLHRElement extends CHTMLElement<HTMLHRElement> {
  public el: HTMLHRElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'hr',
      } as HTMLHRElement;
    } else {
      this.el = document.createElement('hr');
    }
  }
}

export function hr() {
  return new CHTMLHRElement();
}
