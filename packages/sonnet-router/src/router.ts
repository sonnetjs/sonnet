import { SonnetApp, SonnetComponent } from '@sonnetjs/core';
import { Action, History, Location, To } from './history';
import { RouterComponent } from './component';

type RouteOptions = {
  routes: RouterComponent;
  history: History;
  window?: Window;
  mountedId?: string;
};

interface RouterSubscriber {
  (state: RouterState): void;
}

type RouterState = {
  historyAction: Action;
  location: Location;
  initialized: boolean;
  match: RouterComponent | undefined;
};

export class Router {
  private state: RouterState;
  private subscribers: Set<RouterSubscriber> = new Set();
  private unsubscribe: (() => void) | undefined;
  private isAppRoot = false;
  private isFirstMounted = false;

  constructor(public options: RouteOptions) {
    this.state = {
      historyAction: options.history.action,
      location: options.history.location,
      match: undefined,
      initialized: false,
    };
  }

  get window(): Window | undefined {
    return this.options.window ?? (typeof window !== 'undefined' ? window : undefined);
  }

  get routes(): RouterComponent {
    return this.options.routes;
  }

  install(app: SonnetApp): void {
    if (this.state.initialized) return;
    app.lazy(false);

    this.unsubscribe = this.subscribe(async () => {
      if (!app) return;
      const match = this.state.match;

      if (!match) return;

      const lastMatch = match;
      const rootComponent = lastMatch.data?.ancestors
        .reverse()
        .find((match) => match.layout)?.layout;

      if (lastMatch.data?.component) {
        const matchingComponent = await lastMatch.data.component();

        if (app.component && !this.isFirstMounted) {
          this.isAppRoot = true;
        }
        if (!this.isAppRoot && this.options.mountedId) {
          console.warn(
            "Mounted id doesn't have any impact because the app root is not set.",
            'set app.root(App) in your app component.',
          );
        }

        if (app.component && this.isAppRoot) {
          if (this.options.mountedId && this.isFirstMounted) {
            if (rootComponent) {
              const initRoot = await rootComponent();
              app.root(() => initRoot, {
                _children: matchingComponent.get(),
              });
            } else {
              app.root(() => matchingComponent);
            }
          } else {
            if (rootComponent) {
              const initRoot = (await rootComponent())
                .children(matchingComponent.get())
                .get();
              app.root(app.component, {
                _children: initRoot,
              });
            } else {
              app.root(app.component, {
                _children: matchingComponent.get(),
              });
            }
          }
        } else {
          this.isAppRoot = false;
          if (rootComponent) {
            const initRoot = await rootComponent();
            app.root(() => initRoot, {
              _children: matchingComponent.get(),
            });
          } else {
            app.root(() => matchingComponent);
          }
        }
      }
      if (this.options.mountedId && this.isFirstMounted && this.isAppRoot) {
        app.unmount();
        app.mount(this.options.mountedId);
      } else {
        this.isFirstMounted && app.unmount();
        app.mount(app.mountedId);
      }
    });

    app.on('mount', () => {
      this.isFirstMounted = true;
    });

    this.navigate(this.options.history.location.pathname);
    this.state.initialized = true;

    this.window?.document.addEventListener('click', (e) => {
      const target = e.target as HTMLAnchorElement;
      if (target.dataset.link === 'prevent') {
        e.preventDefault();
        this.navigate(target.href);
      }
    });
  }

  uninstall(): void {
    if (this.unsubscribe) {
      this.unsubscribe();
    }
    this.subscribers.clear();
  }

  subscribe(fn: RouterSubscriber): () => void {
    this.subscribers.add(fn);
    return () => this.subscribers.delete(fn);
  }

  private updateState(newState: Partial<RouterState>): void {
    this.state = {
      ...this.state,
      ...newState,
    };

    [...this.subscribers].forEach((subscriber) => subscriber(this.state));
  }

  navigate(to: number | To, action: Action = Action.Push): void {
    if (typeof to === 'number') {
      this.options.history.go(to);
    } else if (action === Action.Push) {
      this.options.history.push(to);
    } else if (action === Action.Replace) {
      this.options.history.replace(to);
    }

    this.updateState({
      historyAction: action,
      location: this.options.history.location,
      match: this.options.routes.match(this.options.history.location.pathname),
    });
  }
}

class RouterFactory {
  private _routes!: RouterComponent;
  private _history!: History;
  private _window?: Window;
  private _mountedId?: string;

  routes(routes: RouterComponent): RouterFactory {
    this._routes = routes;
    return this;
  }

  history(history: History): RouterFactory {
    this._history = history;
    return this;
  }

  window(window: Window): RouterFactory {
    this._window = window;
    return this;
  }

  mountedId(id: string): RouterFactory {
    this._mountedId = id;
    return this;
  }

  get(): Router {
    return new Router({
      routes: this._routes,
      history: this._history,
      window: this._window,
      mountedId: this._mountedId,
    });
  }
}

export function createRouter(): RouterFactory {
  return new RouterFactory()
}
