import CHTMLElement from './CHTMLElement';

class CHTMLButtonElement extends CHTMLElement<HTMLButtonElement> {
  public el: HTMLButtonElement;

  constructor() {
    super();
    const html = document.createElement('button');
    this.el = html;
  }

  public disabled(value: boolean) {
    if (this.el) {
      this.el.disabled = value;
    }
    return this;
  }

  public formAction(value: string) {
    if (this.el) {
      this.el.formAction = value;
    }
    return this;
  }

  public formEncType(value: string) {
    if (this.el) {
      this.el.formEnctype = value;
    }
    return this;
  }

  public formMethod(value: string) {
    if (this.el) {
      this.el.formMethod = value;
    }
    return this;
  }

  public formNoValidate(value: boolean) {
    if (this.el) {
      this.el.formNoValidate = value;
    }
    return this;
  }

  public formTarget(value: string) {
    if (this.el) {
      this.el.formTarget = value;
    }
    return this;
  }

  public name(value: string) {
    if (this.el) {
      this.el.name = value;
    }
    return this;
  }

  public popoverTargetAction(value: string) {
    if (this.el) {
      this.el.popoverTargetAction = value;
    }
    return this;
  }

  public type(value: 'submit' | 'reset' | 'button') {
    if (this.el) {
      this.el.type = value;
    }
    return this;
  }

  public value(value: string) {
    if (this.el) {
      this.el.value = value;
    }
    return this;
  }
}

export function button() {
  return new CHTMLButtonElement();
}
