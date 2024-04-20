import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLStyleElement extends CHTMLElement<HTMLStyleElement> {
  public el: HTMLStyleElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'style',
      } as HTMLLinkElement;
    } else {
      this.el = document.createElement('style');
    }
  }

  public media(value: string) {
    this.el.media = value;
    return this;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }
}

export function style() {
  return new CHTMLStyleElement();
}
