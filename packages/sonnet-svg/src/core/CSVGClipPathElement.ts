import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGClipPathElement extends CSVGElement<SVGClipPathElement> {
  public el?: SVGClipPathElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'clipPath',
      } as SVGClipPathElement;
    } else {
      this.el = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'clipPath',
      );
    }
  }

  public clipPathUnits(value: string) {
    this.el?.setAttribute('clipPathUnits', value);

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

  public mask(value: string) {
    this.el?.setAttribute('mask', value);

    return this;
  }
}

export function clipPath() {
  return new CSVGClipPathElement();
}
