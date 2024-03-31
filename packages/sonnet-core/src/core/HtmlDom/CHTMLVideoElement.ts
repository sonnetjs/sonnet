import CHTMLMediaElement from './CHTMLMediaElement';

class CHTMLVideoElement extends CHTMLMediaElement<HTMLVideoElement> {
  public el: HTMLVideoElement;

  constructor() {
    super();
    const html = document.createElement('video');
    this.el = html;
  }

  public disablePictureInPicture(value: boolean) {
    this.el.disablePictureInPicture = value;
    return this;
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public poster(value: string) {
    this.el.poster = value;
    return this;
  }

  public playsInline(value: boolean) {
    this.el.playsInline = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }
}

export function video() {
  return new CHTMLVideoElement();
}
