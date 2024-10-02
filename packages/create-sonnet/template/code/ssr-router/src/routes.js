import { router, createMemoryHistory, createRouter } from '@sonnetjs/router';

export const routes = router().layout(
  async () => (await import('./partials/Layout')).default()
).children([
  router().path('/').component(async () => (await import('./pages/Home')).default()).get(),
  router().path('/about').component(async () => (await import('./pages/About')).default()).get(),
  router().path('/contact/1/1').component(async () => (await import('./pages/Contact')).default()).get(),
]).get()

const history = createMemoryHistory();

export const routers = createRouter().routes(routes).history(history).mountedId('#app-1').get();
