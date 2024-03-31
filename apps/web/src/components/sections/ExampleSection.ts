import { div, pre } from '@sonnetjs/core';

const ExampleSection = () => {
  return div()
    .className(
      'flex justify-center gap-8 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-xs opacity-10',
    )
    .children(
      pre()
        .className('')
        .innerText(
          `import { a, button, div, h1, img, p, useRef } from '@sonnetjs/core';
  
const Counter = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  let counter = 0;

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
`,
        )
        .get(),
      pre()
        .className('')
        .innerText(
          `div()
  .className('card')
  .children(
    button()
      .ref(buttonRef)
      .innerText(\`count is \${counter}\`)
      .className('btn')
      .js((el) => {
        el.addEventListener("click", () => {
          counter += 1;
          buttonRef.current.innerText = \`count is \${counter}\`
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
`,
        )
        .get(),
    )
    .get();
};

export default ExampleSection;
