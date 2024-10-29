import { SonnetGet, SonnetHead } from '@sonnetjs/shared';

export interface SonnetComponentProps {
  _id: string;
  _index: number;
  _children: SonnetComponent[];
}

export default abstract class SonnetComponent {
  protected _id: string = '';
  id(id: string) {
    this._id = id;
    return this;
  }

  protected _index: number = 0;
  index(index: number) {
    this._index = index;
    return this;
  }

  protected _children: SonnetGet = '';
  children(children: SonnetGet) {
    this._children = children;
    return this;
  }

  private _hashIdCache?: string;
  get hashId() {
    return this._hashIdCache ??= window.crypto.getRandomValues(new Uint32Array(1))[0].toString().substring(0, 8);
  }

  private _parentCache?: HTMLElement;
  get parent() {
    return this._parentCache ??= document.getElementById(this.hashId) as HTMLElement;
  }

  rerender(querySelector: string) {
    const element = document.querySelector(querySelector);

    if (element) {
      const html = this.get();

      const template = document.createElement('template');
      if (typeof html === 'string') {
        template.innerHTML = html;
      } else {
        template.appendChild(html);
      }

      const updatedElement = template.content.querySelector(querySelector);

      if (updatedElement) {
        element.replaceWith(updatedElement);
      }
    }
  }

  callback(cb: (component: SonnetComponent) => void) {
    cb(this);
    return this;
  }

  static head(): SonnetHead {
    return '';
  }

  head(): SonnetHead {
    return '';
  }

  static script() {}

  script() {}

  get(): SonnetGet {
    return '';
  }
}
