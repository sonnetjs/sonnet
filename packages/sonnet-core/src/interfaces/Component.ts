export interface Component {
  loadScripts(): void;

  script(): void;

  get(): HTMLElement;
}
