import CSVGElement from './CSVGElement';

export default class CSVGComponentTransferFunctionElement<
  T,
> extends CSVGElement<T> {
  public declare el?: SVGComponentTransferFunctionElement;

  constructor() {
    super();
  }

  public amplitude(value: string) {
    this.el?.setAttribute('amplitude', value);
    return this;
  }

  public exponent(value: string) {
    this.el?.setAttribute('exponent', value);
    return this;
  }

  public intercept(value: string) {
    this.el?.setAttribute('intercept', value);
    return this;
  }

  public tableValues(value: string) {
    this.el?.setAttribute('tableValues', value);
    return this;
  }

  public type(value: string) {
    this.el?.setAttribute('type', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:type',
      value,
    );
    return this;
  }
}
