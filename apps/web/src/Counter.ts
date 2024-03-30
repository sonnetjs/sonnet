import { a, button, div, h1, img, p, useRef } from '@sonnetjs/client';

let counter = 0;

const buttonRef = useRef<HTMLButtonElement>(null);

const Counter = div()
  .children(
    a()
      .href('https://vitejs.dev')
      .target('blank')
      .children(
        img()
          .src('https://vitejs.dev/logo.svg')
          .className('logo')
          .alt('Vite Logo')
          .get(),
      )
      .get(),
    h1().innerText('Vite').get(),
    div()
      .className('card')
      .children(
        button()
          .ref(buttonRef)
          .id('counter')
          .type('button')
          .innerText(`count is ${counter}`)
          .className('btn')
          .get(),
      )
      .get(),
    p()
      .innerText('Edit src/main.ts and save to test HMR.')
      .className('read-the-docs')
      .get(),
  )
  .get();

buttonRef.current.addEventListener('click', () => {
  counter += 1;
  buttonRef.current.innerText = `count is ${counter}`;
});

export { Counter };
