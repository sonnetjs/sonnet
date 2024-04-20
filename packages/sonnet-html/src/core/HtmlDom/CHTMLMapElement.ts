import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLMapElement extends CHTMLElement<HTMLMapElement> {
  public el: HTMLMapElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'map',
      } as HTMLMapElement;
    } else {
      this.el = document.createElement('map');
    }
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }
}

export function map() {
  return new CHTMLMapElement();
}
