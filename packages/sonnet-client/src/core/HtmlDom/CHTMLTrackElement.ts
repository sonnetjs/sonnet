import CHTMLElement from './CHTMLElement';

class CHTMLTrackElement extends CHTMLElement<HTMLTrackElement> {
  public el: HTMLTrackElement;

  constructor() {
    super();
    const html = document.createElement('track');
    this.el = html;
  }

  public kind(value: string) {
    this.el.kind = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public srclang(value: string) {
    this.el.srclang = value;
    return this;
  }

  public label(value: string) {
    this.el.label = value;
    return this;
  }

  public default(value: boolean) {
    this.el.default = value;
    return this;
  }
}

export function track() {
  return new CHTMLTrackElement();
}
