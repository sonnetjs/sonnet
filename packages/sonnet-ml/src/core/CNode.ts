import CEventTarget from "./CEventTarget";

export default class CNode extends CEventTarget {
  declare public el?: Node;
  
  constructor() {
    super();
  }

  public textContent(value: string) {
    if (this.el) {
      this.el.textContent = value;
    }
    return this;
  }
}