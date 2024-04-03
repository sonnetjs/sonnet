import CSVGElement from './CSVGElement';

export default class CSVGTitleElement extends CSVGElement<SVGTitleElement> {
  public el?: SVGTitleElement;

  constructor() {
    super();
    this.el = document.createElementNS('http://www.w3.org/2000/svg', 'title');
  }
}

export function title() {
  return new CSVGTitleElement();
}
