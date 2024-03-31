import CHTMLElement from './CHTMLElement';

class CHTMLHeadingElement extends CHTMLElement<HTMLHeadingElement> {
  public el: HTMLHeadingElement;

  constructor(level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6') {
    super();
    const html = document.createElement(level);
    this.el = html;
  }
}

export function h1() {
  return new CHTMLHeadingElement('h1');
}

export function h2() {
  return new CHTMLHeadingElement('h2');
}

export function h3() {
  return new CHTMLHeadingElement('h3');
}

export function h4() {
  return new CHTMLHeadingElement('h4');
}

export function h5() {
  return new CHTMLHeadingElement('h5');
}

export function h6() {
  return new CHTMLHeadingElement('h6');
}
