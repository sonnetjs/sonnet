import CSVGComponentTransferFunctionElement from './CSVGComponentTransferFunctionElement';

export default class CSVGFEFuncBElement extends CSVGComponentTransferFunctionElement<SVGFEFuncBElement> {
  public el?: SVGFEFuncBElement;

  constructor() {
    super();
    this.el = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncG');
  }
}

export function feFuncG() {
  return new CSVGFEFuncBElement();
}