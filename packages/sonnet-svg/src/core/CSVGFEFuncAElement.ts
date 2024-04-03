import CSVGComponentTransferFunctionElement from './CSVGComponentTransferFunctionElement';

export default class CSVGFEFuncAElement extends CSVGComponentTransferFunctionElement<SVGFEFuncAElement> {
  public el?: SVGFEFuncAElement;

  constructor() {
    super();
    this.el = document.createElementNS('http://www.w3.org/2000/svg', 'feFuncA');
  }
}

export function feFuncA() {
  return new CSVGFEFuncAElement();
}