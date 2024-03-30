export function render(id: string, element: HTMLElement) {
  const app = document.getElementById(id);
  if (app) {
    app.innerHTML = '';
    app.appendChild(element);
  }
}
