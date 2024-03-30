import CHTMLElement from './CHTMLElement';

class CHTMLAreaElement extends CHTMLElement<HTMLAreaElement> {
  public el: HTMLAreaElement;

  constructor() {
    super();
    const html = document.createElement('area');
    this.el = html;
  }

  public alt(value: string) {
    this.el.alt = value;
    return this;
  }

  public coords(value: string) {
    this.el.coords = value;
    return this;
  }

  public download(value: string) {
    this.el.download = value;
    return this;
  }

  public hash(value: string) {
    this.el.hash = value;
    return this;
  }

  public host(value: string) {
    this.el.host = value;
    return this;
  }

  public hostname(value: string) {
    this.el.hostname = value;
    return this;
  }

  public href(value: string) {
    this.el.href = value
    return this;
  }

  public password(value: string) {
    this.el.password = value;
    return this;
  }

  public pathname(value: string) {
    this.el.pathname = value;
    return this;
  }

  public ping(value: string) {
    this.el.ping = value;
    return this;
  }

  public port(value: string) {
    this.el.port = value;
    return this;
  }

  public protocol(value: string) {
    this.el.protocol = value;
    return this;
  }

  public referrerPolicy(value: string) {
    this.el.referrerPolicy = value;
    return this;
  }

  public rel(value: string) {
    this.el.rel = value;
    return this;
  }

  public search(value: string) {
    this.el.search = value;
    return this;
  }

  public shape(value: string) {
    this.el.shape = value;
    return this;
  }

  public target(value: string) {
    this.el.target = value;
    return this;
  }

  public username(value: string) {
    this.el.username = value;
    return this;
  }

}

export function area() {
  return new CHTMLAreaElement();
}
