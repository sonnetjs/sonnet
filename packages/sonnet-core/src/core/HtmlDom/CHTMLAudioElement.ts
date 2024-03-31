import CHTMLMediaElement from './CHTMLMediaElement';

class CHTMLAudioElement extends CHTMLMediaElement<HTMLAudioElement> {
  public el: HTMLAudioElement;

  constructor() {
    super();
    const html = document.createElement('audio');
    this.el = html;
  }
}

export function audio() {
  return new CHTMLAudioElement();
}
