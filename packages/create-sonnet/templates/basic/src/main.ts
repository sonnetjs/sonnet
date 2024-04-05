import './style.css';
import { render } from '@sonnetjs/core';
import { Counter } from './Counter';

(async () => {
  const CounterComponent = new Counter();
  render('app', await CounterComponent.get());
  CounterComponent.script();
})();
