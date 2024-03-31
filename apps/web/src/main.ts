import './style.css';
import { render } from '@sonnetjs/core';
import App from './App';

(async () => {
  render('app', await App());
})();
