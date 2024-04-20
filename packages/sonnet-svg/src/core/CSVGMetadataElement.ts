import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGMetadataElement extends CSVGElement<SVGMetadataElement> {
  public el?: SVGMetadataElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'metadata',
      } as SVGMetadataElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'metadata',
      );
    }
  }
}

export function metadata() {
  return new CSVGMetadataElement();
}
