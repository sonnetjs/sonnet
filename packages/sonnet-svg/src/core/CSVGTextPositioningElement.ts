import CSVGTextContentElement from './CSVGTextContentElement';

export default class CSVGTextPositioningElement<T> extends CSVGTextContentElement<T> {
  declare public el?: SVGTextPositioningElement;

  constructor() {
    super();
  }
}
