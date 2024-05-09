import { $component } from '@sonnetjs/core';

function Counter() {
  return /*html*/ `
    <button id="counter" type="button" class="btn">count is ${0}</button>
    `;
}

Counter.script = () => {
  let count = 0;
  const counterButton = document.getElementById('counter') as HTMLButtonElement;
  counterButton.addEventListener('click', () => {
    count++;

    counterButton.innerText = `count is ${count}`;
  });
};

export default $component(Counter);
