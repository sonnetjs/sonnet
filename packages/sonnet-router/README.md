# sonnetjs/router

A simple and lightweight router for SonnetJS.

## Installation

```bash
npm i @sonnetjs/router
```

## Usage

```typescript
// src/routes.ts
import { router, createBrowserHistory, createRouter } from '@sonnetjs/router';

export const routes = router()
  .layout(async () => (await import('./partials/Layout')).default())
  .children([
    router()
      .path('/')
      .component(async () => (await import('./pages/Home')).default())
      .get(),
    router()
      .path('/about')
      .component(async () => (await import('./pages/About')).default())
      .get(),
    router()
      .path('/contact')
      .component(async () => (await import('./pages/Contact')).default())
      .get(),
  ])
  .get();

const history = createBrowserHistory();

export const routers = createRouter()
  .routes(routes)
  .history(history)
  .mountedId('#app-1')
  .get();
```

```typescript
// src/main.ts
import App from './App';
import { routers } from './routes';

import { createApp } from '@sonnetjs/core';

const app = createApp();
app.root(App);
app.use(routers);
app.lazy();
app.mount('#app');
app.initialized();
```
