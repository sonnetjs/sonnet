export function render(id: string, element: SVGElement) {
  const app = document.getElementById(id);
  if (app) {
    app.innerHTML = '';
    app.appendChild(element);
  }
}
