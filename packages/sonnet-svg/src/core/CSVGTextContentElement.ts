import CSVGGraphicsElement from './CSVGGraphicsElement';

export default class CSVGTextContentElement<T> extends CSVGGraphicsElement<T> {
  public declare el?: SVGTextContentElement;

  constructor() {
    super();
  }

  public direction(value: string) {
    this.el?.setAttribute('direction', value);

    return this;
  }

  public dominantBaseline(value: string) {
    this.el?.setAttribute('dominant-baseline', value);

    return this;
  }

  public fill(value: string) {
    this.el?.setAttribute('fill', value);

    return this;
  }

  public fillOpacity(value: string) {
    this.el?.setAttribute('fill-opacity', value);

    return this;
  }

  public fillRule(value: string) {
    this.el?.setAttribute('fill-rule', value);

    return this;
  }

  public fontFamily(value: string) {
    this.el?.setAttribute('font-family', value);

    return this;
  }

  public fontSize(value: string) {
    this.el?.setAttribute('font-size', value);

    return this;
  }

  public fontSizeAdjust(value: string) {
    this.el?.setAttribute('font-size-adjust', value);

    return this;
  }

  public fontStretch(value: string) {
    this.el?.setAttribute('font-stretch', value);

    return this;
  }

  public fontStyle(value: string) {
    this.el?.setAttribute('font-style', value);

    return this;
  }

  public fontVariant(value: string) {
    this.el?.setAttribute('font-variant', value);

    return this;
  }

  public fontWeight(value: string) {
    this.el?.setAttribute('font-weight', value);

    return this;
  }

  public lang(value: string) {
    this.el?.setAttribute('lang', value);
    this.el?.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:lang',
      value,
    );

    return this;
  }

  public lengthAdjust(value: string) {
    this.el?.setAttribute('lengthAdjust', value);

    return this;
  }

  public pointerEvents(value: string) {
    this.el?.setAttribute('pointer-events', value);
    return this;
  }

  public systemLanguage(value: string) {
    this.el?.setAttribute('systemLanguage', value);
    return this;
  }

  public textAnchor(value: string) {
    this.el?.setAttribute('text-anchor', value);
    return this;
  }

  public textDecoration(value: string) {
    this.el?.setAttribute('text-decoration', value);
    return this;
  }

  public textLenght(value: string) {
    this.el?.setAttribute('textLenght', value);
    return this;
  }

  public letterSpacing(value: string) {
    this.el?.setAttribute('letter-spacing', value);

    return this;
  }
  public unicodeBidi(value: string) {
    this.el?.setAttribute('unicode-bidi', value);

    return this;
  }

  public vectorOffset(value: string) {
    this.el?.setAttribute('vector-offset', value);

    return this;
  }

  public opacity(value: string) {
    this.el?.setAttribute('opacity', value);
    return this;
  }

  public paintOrder(value: string) {
    this.el?.setAttribute('paint-order', value);
  }

  public visibility(value: string) {
    this.el?.setAttribute('visibility', value);
    return this;
  }

  public wordSpacing(value: string) {
    this.el?.setAttribute('word-spacing', value);
    return this;
  }

  public writingMode(value: string) {
    this.el?.setAttribute('writing-mode', value);
    return this;
  }
}
