import { isServer } from '@sonnetjs/shared';
import CHTMLMediaElement from './CHTMLMediaElement';

class CHTMLAudioElement extends CHTMLMediaElement<HTMLAudioElement> {
  public el: HTMLAudioElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'audio',
      } as HTMLAudioElement;
    } else {
      this.el = document.createElement('audio');
    }
  }
}

export function audio() {
  return new CHTMLAudioElement();
}
