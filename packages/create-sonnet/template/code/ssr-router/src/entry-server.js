import App from './App';
import { routers } from './routes';

export async function render(url) {
  routers.navigate(url ? url : '/');
  
  const { root, children } = await routers.hyderate(App);

  if (!root) {
    return { html: url };
  }

  const html = root().children(children ?? '').get();

  return { html };
}
