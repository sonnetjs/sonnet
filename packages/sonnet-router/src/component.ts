import { SonnetComponent } from '@sonnetjs/core';
import { 
  match
 } from 'path-to-regexp';

type RouteData = {
  path: string;
  component: (() => Promise<SonnetComponent> | SonnetComponent) | undefined;
  layout: (() => Promise<SonnetComponent> | SonnetComponent) | undefined;
  ancestors: RouteData[];
}

export class RouterComponent {
  _path: string = '/';
  _component: (() => Promise<SonnetComponent> | SonnetComponent) | undefined;
  _layout: (() => Promise<SonnetComponent> | SonnetComponent) | undefined;
  _children: RouterComponent[] = [];
  _ancestors: RouterComponent[] = [];

  index() {
    this._path = '/';
    return this;
  }

  path(path: string) {
    this._path = path.replace(/\/$/, '');
    return this;
  }

  component(component: () => Promise<SonnetComponent> | SonnetComponent) {
    this._component = component;
    return this;
  }

  layout(layout: () => Promise<SonnetComponent> | SonnetComponent) {
    this._layout = layout;
    return this;
  }

  children(routes: RouterComponent[]) {
    this._children = routes;
    return this;
  }

  get() {
    return this;
  }

  get data(): RouteData {
    return {
      path: this._path,
      component: this._component,
      layout: this._layout,
      ancestors: this._ancestors.map(ancestor => ancestor.data).filter(Boolean) as RouteData[],
    }
  }

  match(
    path: string,
    prevPath = '',
    ancestors: RouterComponent[] = []
  ): RouterComponent | undefined {
    for (const child of this._children) {
      const completePath = prevPath + child._path;
      const currentAncestors = [...ancestors, this];

      if (match(completePath, { decode: decodeURIComponent })(path) && child._component) {
        child._path = path;
        child._ancestors = currentAncestors;
        return child;
      } else if (match(completePath + '(.*)', { decode: decodeURIComponent })(path)) {
        const nestedResult = child.match(path, completePath, currentAncestors);
        
        if (nestedResult) {
          nestedResult._path = path;
          nestedResult._ancestors = currentAncestors;
          return nestedResult;
        }
      }
    }

    return undefined;
  }

}

export function router() {
  return new RouterComponent()
}

