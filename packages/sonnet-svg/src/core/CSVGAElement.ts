import { isServer } from '@sonnetjs/shared';
import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGAElement extends CSVGGraphicsElement<SVGAElement> {
  public el?: SVGAElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'a',
      } as SVGAElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'a');
    }
  }

  public download(value: string) {
    this.el?.setAttribute('download', value);
    return this;
  }

  public href(value: string) {
    this.el?.setAttribute('href', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      value,
    );
    return this;
  }

  public hrefLang(value: string) {
    this.el?.setAttribute('hreflang', value);
    return this;
  }

  public ping(value: string) {
    this.el?.setAttribute('ping', value);
    return this;
  }

  public referrerPolicy(value: string) {
    this.el?.setAttribute('referrerpolicy', value);
    return this;
  }

  public rel(value: string) {
    this.el?.setAttribute('rel', value);
    return this;
  }

  public target(value: string) {
    this.el?.setAttribute('target', value);
    return this;
  }

  public type(value: string) {
    this.el?.setAttribute('type', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:type',
      value,
    );
    return this;
  }

  public actuate(value: string) {
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:actuate',
      value,
    );
    return this;
  }

  public show(value: string) {
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:show',
      value,
    );
    return this;
  }

  public title(value: string) {
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:title',
      value,
    );
    return this;
  }

  public mask(value: string) {
    this.el?.setAttribute('mask', value);
    return this;
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
    return this;
  }

  public pointerEvents(value: string) {
    this.el?.setAttribute('pointer-events', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }

  public visibility(value: string) {
    this.el?.setAttribute('visibility', value);
    return this;
  }
}

export function a() {
  return new CSVGAElement();
}
