import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLEmbedElement extends CHTMLElement<HTMLEmbedElement> {
  public el: HTMLEmbedElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'embed',
      } as HTMLEmbedElement;
    } else {
      this.el = document.createElement('embed');
    }
  }

  public height(value: string) {
    this.el.height = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public width(value: string) {
    this.el.width = value;
    return this;
  }
}

export function embed() {
  return new CHTMLEmbedElement();
}
