import { CElement } from '@sonnetjs/dom';
export default class CMathMLElement extends CElement<MathMLElement> {
  public el?: MathMLElement;

  constructor(tag: string) {
    super();
    this.el = document.createElementNS(
      'http://www.w3.org/1998/Math/MathML',
      tag,
    );
  }

  public dir(value: string) {
    if (this.el) {
      this.el.setAttribute('dir', value);
    }
    return this;
  }

  public style(value: CSSStyleDeclaration | Record<string, string>) {
    if (this.el) {
      Object.assign(this.el.style, value);
    }
    return this;
  }

  public displayStyle(value: string) {
    if (this.el) {
      this.el.setAttribute('display', value);
    }
    return this;
  }

  public mathbackground(value: string) {
    if (this.el) {
      this.el.setAttribute('mathbackground', value);
    }
    return this;
  }

  public mathcolor(value: string) {
    if (this.el) {
      this.el.setAttribute('mathcolor', value);
    }
    return this;
  }

  public mathsize(value: string) {
    if (this.el) {
      this.el.setAttribute('mathsize', value);
    }
    return this;
  }

  public nonce(value: string) {
    if (this.el) {
      this.el.setAttribute('nonce', value);
    }
    return this;
  }

  public scriptlevel(value: string) {
    if (this.el) {
      this.el.setAttribute('scriptlevel', value);
    }
    return this;
  }

  public tabindex(value: string) {
    if (this.el) {
      this.el.setAttribute('tabindex', value);
    }
    return this;
  }
}

export function math() {
  return new CMathMLElement('math');
}

export function mi() {
  return new CMathMLElement('mi');
}

export function mn() {
  return new CMathMLElement('mn');
}

export function mo() {
  return new CMathMLElement('mo');
}

export function ms() {
  return new CMathMLElement('ms');
}

export function mspace() {
  return new CMathMLElement('mspace');
}

export function mtext() {
  return new CMathMLElement('mtext');
}

export function menclose() {
  return new CMathMLElement('menclose');
}

export function merror() {
  return new CMathMLElement('merror');
}

export function mfrac() {
  return new CMathMLElement('mfrac');
}

export function mpadded() {
  return new CMathMLElement('mpadded');
}

export function mphantom() {
  return new CMathMLElement('mphantom');
}

export function mroot() {
  return new CMathMLElement('mroot');
}

export function mrow() {
  return new CMathMLElement('mrow');
}

export function msqrt() {
  return new CMathMLElement('msqrt');
}

export function mstyle() {
  return new CMathMLElement('mstyle');
}

export function mmultiscripts() {
  return new CMathMLElement('mmultiscripts');
}

export function mover() {
  return new CMathMLElement('mover');
}

export function msub() {
  return new CMathMLElement('msub');
}

export function msubsup() {
  return new CMathMLElement('msubsup');
}

export function msup() {
  return new CMathMLElement('msup');
}

export function munder() {
  return new CMathMLElement('munder');
}

export function munderover() {
  return new CMathMLElement('munderover');
}

export function mtable() {
  return new CMathMLElement('mtable');
}

export function mtr() {
  return new CMathMLElement('mtr');
}

export function mtd() {
  return new CMathMLElement('mtd');
}

export function annotation() {
  return new CMathMLElement('annotation');
}

export function annotationXml() {
  return new CMathMLElement('annotation-xml');
}

export function semantics() {
  return new CMathMLElement('semantics');
}
