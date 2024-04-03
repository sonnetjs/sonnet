import CElement from './CElement';

export default class CSVGElement<T> extends CElement {
  public declare el?: SVGElement;

  constructor() {
    super();
  }

  public nonce(value: string) {
    if (this.el) {
      this.el.nonce = value;
    }
    return this;
  }

  public style(value: CSSStyleDeclaration | Record<string, string>) {
    if (this.el) {
      // this.el.style.cssText = value;
      Object.assign(this.el.style, value);
    }
    return this;
  }

  public tabIndex(value: number) {
    if (this.el) {
      this.el.tabIndex = value;
    }
    return this;
  }

  public color(value: string) {
    this.el?.setAttribute('color', value);

    return this;
  }

  public cursor(value: string) {
    this.el?.setAttribute('cursor', value);

    return this;
  }

  public display(value: string) {
    this.el?.setAttribute('display', value);

    return this;
  }

  public filter(value: string) {
    this.el?.setAttribute('filter', value);

    return this;
  }

  public transform(value: string) {
    this.el?.setAttribute('transform', value);

    return this;
  }

  public transformOriging(value: string) {
    this.el?.setAttribute('transform-origin', value);

    return this;
  }

  public children(...value: (Node | string)[]) {
    if (this.el) {
      this.el.append(...value);
    }
    return this;
  }

  public ref(value: { current: SVGElement | null }) {
    if (this.el) {
      value.current = this.el;
    }
    return this;
  }

  public js(callback: (el: SVGElement) => void) {
    if (this.el) {
      callback(this.el);
    }
    return this;
  }

  public get() {
    return this.el as T;
  }
}
