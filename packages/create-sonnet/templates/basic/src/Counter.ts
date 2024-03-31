import { a, button, div, h1, img, p, useRef } from '@sonnetjs/core';

let counter = 0;

const Counter = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return div()
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
            .js((el) => {
              el.addEventListener("click", () => {
                counter += 1;
                buttonRef.current.innerText = `count is ${counter}`
              })
            })
            .get(),
        )
        .get(),
      p()
        .innerText('Edit src/main.ts and save to test HMR.')
        .className('read-the-docs')
        .get(),
    )
    .get();
};

export { Counter };
