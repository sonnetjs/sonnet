export function render(id: string, element: MathMLElement) {
  const app = document.getElementById(id);
  if (app) {
    app.innerHTML = '';
    app.appendChild(element);
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function $component<T extends new (...args: any[]) => any>(cls: T) {
  return (...args: ConstructorParameters<T>): InstanceType<T> =>
    new cls(...args);
}
