import Counter from './Counter';

export async function render() {
  const html = await Counter().get();
  return { html };
}
