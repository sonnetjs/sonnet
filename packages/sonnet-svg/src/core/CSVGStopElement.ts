import { isServer } from '@sonnetjs/shared';
import CSVGElement from './CSVGElement';

export default class CSVGStopElement extends CSVGElement<SVGStopElement> {
  public el?: SVGStopElement;

  constructor() {
    super();
    if (isServer()) {
      this.el = {
        tagName: 'stop',
      } as SVGStopElement;
    } else {
      this.el = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    }
  }

  public offset(value: string) {
    this.el?.setAttribute('offset', value);
    return this;
  }

  public stopColor(value: string) {
    this.el?.setAttribute('stop-color', value);
    return this;
  }

  public stopOpacity(value: string) {
    this.el?.setAttribute('stop-opacity', value);
    return this;
  }
}

export function stop() {
  return new CSVGStopElement();
}
