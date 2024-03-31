import CNode from './CNode';

export default class CElement extends CNode {
  public declare el?: Element;

  constructor() {
    super();
  }

  public className(value: string) {
    if (this.el) {
      this.el.className = value;
    }
    return this;
  }

  public id(value: string) {
    if (this.el) {
      this.el.id = value;
    }
    return this;
  }

  public innerHtml(value: string) {
    if (this.el) {
      this.el.innerHTML = value;
    }
    return this;
  }

  public outerHtml(value: string) {
    if (this.el) {
      this.el.outerHTML = value;
    }
    return this;
  }

  public scrollLeft(value: number) {
    if (this.el) {
      this.el.scrollLeft = value;
    }
    return this;
  }

  public scrollTop(value: number) {
    if (this.el) {
      this.el.scrollTop = value;
    }
    return this;
  }

  public slot(value: string) {
    if (this.el) {
      this.el.slot = value;
    }
    return this;
  }
}
