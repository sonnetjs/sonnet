import {
  createBrowserHistory,
  createRouter,
} from '@sonnetjs/router';

const routes = [
  {
    rootComponent: async () => (await import('./partials/Layout')).default(),
    children: [
      {
        path: '/',
        component: async () => (await import('./pages/Home')).default(),
      },
      {
        path: '/about',
        component: async () => (await import('./pages/About')).default(),
      },
      {
        path: '/contact',
        component: async () => (await import('./pages/Contact')).default(),
      },
    ],
  },
];

const history = createBrowserHistory();

export const router = createRouter({
  routes,
  history,
  mountedId: '#app-1',
});