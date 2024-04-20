import { isServer } from '@sonnetjs/shared';
import CSVGComponentTransferFunctionElement from './CSVGComponentTransferFunctionElement';

export default class CSVGFEFuncAElement extends CSVGComponentTransferFunctionElement<SVGFEFuncAElement> {
  public el?: SVGFEFuncAElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'feFuncA',
      } as SVGFEFuncAElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'feFuncA',
      );
    }
  }
}

export function feFuncA() {
  return new CSVGFEFuncAElement();
}
