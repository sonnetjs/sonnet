import './style.css';
import { render } from '@sonnetjs/core';
import App from './App';

(async () => {
  const AppComponent = new App();
  render('app', await AppComponent.get());
  AppComponent.script();
})();
