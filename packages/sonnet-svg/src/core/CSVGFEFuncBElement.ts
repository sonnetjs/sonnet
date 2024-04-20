import { isServer } from '@sonnetjs/shared';
import CSVGComponentTransferFunctionElement from './CSVGComponentTransferFunctionElement';

export default class CSVGFEFuncBElement extends CSVGComponentTransferFunctionElement<SVGFEFuncBElement> {
  public el?: SVGFEFuncBElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feFuncB',
      } as SVGFEFuncBElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feFuncB',
      );
    }
  }
}

export function feFuncB() {
  return new CSVGFEFuncBElement();
}
