import { a, button, div, h1, img, p } from '@sonnetjs/core';

class Counter {
  counter = 0;

  public script() {
    const counterButton = document.getElementById(
      'counter',
    ) as HTMLButtonElement;
    counterButton.addEventListener('click', () => {
      this.counter += 1;
      counterButton.innerText = `count is ${this.counter}`;
    });
  }

  public get() {
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
              .id('counter')
              .type('button')
              .innerText(`count is ${this.counter}`)
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
  }
}

export { Counter };
