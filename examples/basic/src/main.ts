import './style.css';
import { render } from '@sonnetjs/core';
import { Counter } from './Counter';

(async () => {
  render('app', await Counter());
})();
