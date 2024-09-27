# sonnetjs/router

A simple and lightweight router for SonnetJS.

## Installation

```bash
npm i @sonnetjs/router
```

## Usage

```typescript
// src/router.ts
import {
  RouteObject,
  createBrowserHistory,
  createRouter,
} from '@sonnetjs/router';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import RootComponent from './partials/Layout';

const routes: RouteObject[] = [
  {
    rootComponent: RootComponent,
    children: [
      { path: '/', component: Home },
      { path: '/about', component: About },
      { path: '/contact', component: Contact },
    ],
  },
];

const history = createBrowserHistory();

export const router = createRouter({
  routes,
  history,
});
```

```typescript
// src/main.ts
import App from './App';
import { router } from './router';

import { createApp } from '@sonnetjs/core';

const app = createApp();
app.root(App);
app.use(router);
app.lazy();
app.mount('#app');
app.initialized();
```
