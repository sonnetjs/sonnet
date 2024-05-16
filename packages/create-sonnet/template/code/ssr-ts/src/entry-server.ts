import App from './App';

export async function render() {
  const html = await App().get();
  return { html };
}