import CSVGElement from './CSVGElement';

export default class CSVGAnimationElement<T> extends CSVGElement<T> {
  public declare el?: SVGAnimationElement;

  constructor() {
    super();
  }

  public accumulate(value: string) {
    this.el?.setAttribute('accumulate', value);
    return this;
  }

  public additive(value: string) {
    this.el?.setAttribute('additive', value);
    return this;
  }

  public begin(value: string) {
    this.el?.setAttribute('begin', value);
    return this;
  }

  public by(value: string) {
    this.el?.setAttribute('by', value);
    return this;
  }

  public calcMode(value: string) {
    this.el?.setAttribute('calcMode', value);
    return this;
  }

  public dur(value: string) {
    this.el?.setAttribute('dur', value);
    return this;
  }

  public end(value: string) {
    this.el?.setAttribute('end', value);
    return this;
  }

  public from(value: string) {
    this.el?.setAttribute('from', value);
    return this;
  }

  public to(value: string) {
    this.el?.setAttribute('to', value);
    return this;
  }

  public keySplines(value: string) {
    this.el?.setAttribute('keySplines', value);
    return this;
  }

  public keyTimes(value: string) {
    this.el?.setAttribute('keyTimes', value);
    return this;
  }

  public max(value: string) {
    this.el?.setAttribute('max', value);
    return this;
  }

  public min(value: string) {
    this.el?.setAttribute('min', value);
    return this;
  }

  public repeatCount(value: string) {
    this.el?.setAttribute('repeatCount', value);
    return this;
  }

  public repeatDur(value: string) {
    this.el?.setAttribute('repeatDur', value);
    return this;
  }

  public restart(value: string) {
    this.el?.setAttribute('restart', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }

  public values(value: string) {
    this.el?.setAttribute('values', value);
    return this;
  }
}
