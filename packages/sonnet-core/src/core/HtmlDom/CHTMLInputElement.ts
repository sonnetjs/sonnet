import CHTMLElement from './CHTMLElement';

class CHTMLInputElement extends CHTMLElement<HTMLInputElement> {
  public el: HTMLInputElement;

  constructor() {
    super();
    const html = document.createElement('input');
    this.el = html;
  }

  public defaultValue(value: string) {
    this.el.defaultValue = value;
    return this;
  }

  public dirName(value: string) {
    this.el.dirName = value;
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

  public popoverTargetAction(value: string) {
    this.el.popoverTargetAction = value;
    return this;
  }

  public popoverTargetElement(value: Element) {
    this.el.popoverTargetElement = value;
    return this;
  }

  public step(value: string) {
    this.el.step = value;
    return this;
  }

  public type(value: string) {
    this.el.type = value;
    return this;
  }

  public value(value: string) {
    this.el.value = value;
    return this;
  }

  public valueAsDate(value: Date) {
    this.el.valueAsDate = value;
    return this;
  }

  public valueAsNumber(value: number) {
    this.el.valueAsNumber = value;
    return this;
  }

  public formAction(value: string) {
    this.el.formAction = value;
    return this;
  }

  public formEnctype(value: string) {
    this.el.formEnctype = value;
    return this;
  }

  public formMethod(value: string) {
    this.el.formMethod = value;
    return this;
  }

  public formNoValidate(value: boolean) {
    this.el.formNoValidate = value;
    return this;
  }

  public formTarget(value: string) {
    this.el.formTarget = value;
    return this;
  }

  public disabled(value: boolean) {
    this.el.disabled = value;
    return this;
  }

  public required(value: boolean) {
    this.el.required = value;
    return this;
  }

  public checked(value: boolean) {
    this.el.checked = value;
    return this;
  }

  public defaultChecked(value: boolean) {
    this.el.defaultChecked = value;
    return this;
  }

  public indeterminate(value: boolean) {
    this.el.indeterminate = value;
    return this;
  }

  public alt(value: string) {
    this.el.alt = value;
    return this;
  }

  public height(value: number) {
    this.el.height = value;
    return this;
  }

  public src(value: string) {
    this.el.src = value;
    return this;
  }

  public width(value: number) {
    this.el.width = value;
    return this;
  }

  public accept(value: string) {
    this.el.accept = value;
    return this;
  }

  public files(value: FileList) {
    this.el.files = value;
    return this;
  }

  public webkitdirectory(value: boolean) {
    this.el.webkitdirectory = value;
    return this;
  }

  public autocomplete(value: AutoFill) {
    this.el.autocomplete = value;
    return this;
  }

  public capture(value: string) {
    this.el.capture = value;
    return this;
  }

  public max(value: string) {
    this.el.max = value;
    return this;
  }

  public maxLength(value: number) {
    this.el.maxLength = value;
    return this;
  }

  public min(value: string) {
    this.el.min = value;
    return this;
  }

  public minLength(value: number) {
    this.el.minLength = value;
    return this;
  }

  public pattern(value: string) {
    this.el.pattern = value;
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

  public size(value: number) {
    this.el.size = value;
    return this;
  }
}

export function input() {
  return new CHTMLInputElement();
}
