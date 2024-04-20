import { isServer } from '@sonnetjs/shared';
import CHTMLElement from './CHTMLElement';

class CHTMLSpanElement extends CHTMLElement<HTMLSpanElement> {
  public el: HTMLSpanElement;

  constructor(tag: string = 'span') {
    super();
    if (isServer()) {
      this.el = {
        tagName: tag,
      } as HTMLSpanElement;
    } else {
      this.el = document.createElement(tag);
    }
  }
}

export function span() {
  return new CHTMLSpanElement();
}

export function address() {
  return new CHTMLSpanElement('address');
}

export function dt() {
  return new CHTMLSpanElement('dt');
}

export function bdo() {
  return new CHTMLSpanElement('bdo');
}

export function cite() {
  return new CHTMLSpanElement('cite');
}

export function code() {
  return new CHTMLSpanElement('code');
}

export function em() {
  return new CHTMLSpanElement('em');
}

export function i() {
  return new CHTMLSpanElement('i');
}
