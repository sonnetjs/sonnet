import CHTMLElement from './CHTMLElement';

class CHTMLTextAreaElement extends CHTMLElement<HTMLTextAreaElement> {
  public el: HTMLTextAreaElement;

  constructor() {
    super();
    const html = document.createElement('textarea');
    this.el = html;
  }

  public autocapitalize(value: string) {
    this.el.autocapitalize = value;
    return this;
  }

  public autocomplete(value: AutoFill) {
    this.el.autocomplete = value;
    return this;
  }

  public cols(value: number) {
    this.el.cols = value;
    return this;
  }

  public defaultValue(value: string) {
    this.el.defaultValue = value;
    return this;
  }

  public dirName(value: string) {
    this.el.dirName = value;
    return this;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public maxLength(value: number) {
    this.el.maxLength = value;
    return this;
  }

  public minLength(value: number) {
    this.el.minLength = value;
    return this;
  }

  public name(value: string) {
    this.el.name = value;
    return this;
  }

  public placeholder(value: string) {
    this.el.placeholder = value;
    return this;
  }

  public readOnly(value: boolean) {
    this.el.readOnly = value;
    return this;
  }

  public required(value: boolean) {
    this.el.required = value;
    return this;
  }

  public rows(value: number) {
    this.el.rows = value;
    return this;
  }

  public selectionDirection(value: 'forward' | 'backward' | 'none') {
    this.el.selectionDirection = value;
    return this;
  }

  public selectionEnd(value: number) {
    this.el.selectionEnd = value;
    return this;
  }

  public selectionStart(value: number) {
    this.el.selectionStart = value;
    return this;
  }

  public textLength() {
    return this.el.textLength;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }

  public wrap(value: 'hard' | 'soft' | 'off') {
    this.el.wrap = value;
    return this;
  }
}

export function textarea() {
  return new CHTMLTextAreaElement();
}
