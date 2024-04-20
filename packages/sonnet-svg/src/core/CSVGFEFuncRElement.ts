import { isServer } from '@sonnetjs/shared';
import CSVGComponentTransferFunctionElement from './CSVGComponentTransferFunctionElement';

export default class CSVGFEFuncRElement extends CSVGComponentTransferFunctionElement<SVGFEFuncRElement> {
  public el?: SVGFEFuncRElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feFuncR',
      } as SVGFEFuncRElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feFuncR',
      );
    }
  }
}

export function feFuncR() {
  return new CSVGFEFuncRElement();
}
