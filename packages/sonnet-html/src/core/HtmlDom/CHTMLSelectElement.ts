import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLSelectElement extends CHTMLElement<HTMLSelectElement> {
  public el: HTMLSelectElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'select',
      } as HTMLSelectElement;
    } else {
      this.el = document.createElement('select');
    }
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public length(value: number) {
    this.el.length = value;
    return this;
  }

  public multiple(value: boolean) {
    this.el.multiple = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public required(value: boolean) {
    this.el.required = value;
    return this;
  }

  public selectedIndex(value: number) {
    this.el.selectedIndex = value;
    return this;
  }

  public size(value: number) {
    this.el.size = value;
    return this;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }
}

export function select() {
  return new CHTMLSelectElement();
}
