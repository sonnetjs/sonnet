import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLCanvasElement extends CHTMLElement<HTMLCanvasElement> {
  public el: HTMLCanvasElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'canvas',
      } as HTMLCanvasElement;
    } else {
      this.el = document.createElement('canvas');
    }
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }
}

export function canvas() {
  return new CHTMLCanvasElement();
}
