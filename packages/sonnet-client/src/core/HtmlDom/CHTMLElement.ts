import CElement from './CElement';

export default class CHTMLElement<T> extends CElement {
  public declare el?: HTMLElement;

  constructor(tag?: string) {
    super();
    if (tag) {
      const html = document.createElement(tag);
      this.el = html;
    }
  }

  public accessKey(value: string) {
    if (this.el) {
      this.el.accessKey = value;
    }
    return this;
  }

  public autoFocus(value: boolean) {
    if (this.el) {
      this.el.autofocus = value;
    }
    return this;
  }

  public contentEditable(value: 'true' | 'false' | 'plaintext-only') {
    if (this.el) {
      this.el.contentEditable = value;
    }
    return this;
  }

  public dir(value: 'ltr' | 'rtl' | 'auto') {
    if (this.el) {
      this.el.dir = value;
    }
    return this;
  }

  public draggable(value: boolean) {
    if (this.el) {
      this.el.draggable = value;
    }
    return this;
  }

  public enterKeyHint(value: string) {
    if (this.el) {
      this.el.enterKeyHint = value;
    }
    return this;
  }

  public hidden(value: boolean) {
    if (this.el) {
      this.el.hidden = value;
    }
    return this;
  }

  public inert(value: boolean) {
    if (this.el) {
      this.el.inert = value;
    }
    return this;
  }

  public innerText(value: string) {
    if (this.el) {
      this.el.innerText = value;
    }
    return this;
  }

  public lang(value: string) {
    if (this.el) {
      this.el.lang = value;
    }
    return this;
  }

  public nonce(value: string) {
    if (this.el) {
      this.el.nonce = value;
    }
    return this;
  }

  public outerText(value: string) {
    if (this.el) {
      this.el.outerText = value;
    }
    return this;
  }

  public popover(value: string) {
    if (this.el) {
      this.el.title = value;
    }
    return this;
  }

  public spellcheck(value: boolean) {
    if (this.el) {
      this.el.spellcheck = value;
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

  public title(value: string) {
    if (this.el) {
      this.el.title = value;
    }
    return this;
  }

  public translate(value: boolean) {
    if (this.el) {
      this.el.translate = value;
    }
    return this;
  }

  public children(...value: (Node | string)[]) {
    if (this.el) {
      this.el.append(...value);
    }
    return this;
  }

  public ref(value: { current: HTMLElement | null }) {
    if (this.el) {
      value.current = this.el;
    }
    return this;
  }

  public callback(callback: (el: HTMLElement) => void) {
    if (this.el) {
      callback(this.el);
    }
    return this;
  }

  public get() {
    return this.el as T;
  }
}

export function article() {
  return new CHTMLElement<HTMLElement>('article');
}

export function aside() {
  return new CHTMLElement<HTMLElement>('aside');
}

export function footer() {
  return new CHTMLElement<HTMLElement>('footer');
}

export function header() {
  return new CHTMLElement<HTMLElement>('header');
}

export function hgroup() {
  return new CHTMLElement<HTMLElement>('hgroup');
}

export function main() {
  return new CHTMLElement<HTMLElement>('main');
}

export function nav() {
  return new CHTMLElement<HTMLElement>('nav');
}

export function section() {
  return new CHTMLElement<HTMLElement>('section');
}

export function search() {
  return new CHTMLElement<HTMLElement>('search');
}

export function dd() {
  return new CHTMLElement<HTMLElement>('dd');
}

export function figcaption() {
  return new CHTMLElement<HTMLElement>('figcaption');
}

export function figure() {
  return new CHTMLElement<HTMLElement>('figure');
}

export function abbr() {
  return new CHTMLElement<HTMLElement>('abbr');
}

export function b() {
  return new CHTMLElement<HTMLElement>('b');
}

export function bdi() {
  return new CHTMLElement<HTMLElement>('bdi');
}

export function dfn() {
  return new CHTMLElement<HTMLElement>('dfn');
}

export function kbd() {
  return new CHTMLElement<HTMLElement>('kbd');
}

export function mark() {
  return new CHTMLElement<HTMLElement>('mark');
}

export function rp() {
  return new CHTMLElement<HTMLElement>('rp');
}

export function rt() {
  return new CHTMLElement<HTMLElement>('rt');
}

export function ruby() {
  return new CHTMLElement<HTMLElement>('ruby');
}

export function s() {
  return new CHTMLElement<HTMLElement>('s');
}

export function samp() {
  return new CHTMLElement<HTMLElement>('samp');
}

export function small() {
  return new CHTMLElement<HTMLElement>('small');
}

export function strong() {
  return new CHTMLElement<HTMLElement>('strong');
}

export function sub() {
  return new CHTMLElement<HTMLElement>('sub');
}

export function sup() {
  return new CHTMLElement<HTMLElement>('sup');
}

export function u() {
  return new CHTMLElement<HTMLElement>('u');
}

export function variable() {
  return new CHTMLElement<HTMLElement>('var');
}

export function wbr() {
  return new CHTMLElement<HTMLElement>('wbr');
}

export function noscript() {
  return new CHTMLElement<HTMLElement>('noscript');
}

export function summary() {
  return new CHTMLElement<HTMLElement>('summary');
}
