import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLLegendElement extends CHTMLElement<HTMLLegendElement> {
  public el: HTMLLegendElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'legend',
      } as HTMLLegendElement;
    } else {
      this.el = document.createElement('legend');
    }
  }
}

export function legend() {
  return new CHTMLLegendElement();
}
