# sonnetjs/core

sonnetjs/core is a framework for building web applications with a focus on simplicity and performance with native feel. It is built on top of vanilla JavaScript.

## Features

- **Simple**: sonnetjs/core is designed to be simple and easy to use. It is built on top of vanilla JavaScript and does not require any additional dependencies.

- **Performance**: sonnetjs/core is designed to be fast and lightweight. It is built with performance in mind and does not include any unnecessary features.

- **Native feel**: sonnetjs/core is designed to provide a native feel to web applications. It uses modern web technologies to provide a smooth and responsive user experience.

## Installation

You can install sonnetjs/core using npm:

```bash
npm install @sonnetjs/core
```

## Usage

To use sonnetjs/core in your web application, you can use it with 'preferably vite' or any other bundler.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + TS</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

```typescript
// main.ts
import './style.css';
import { render } from '@sonnetjs/core';
import { App } from './App';

(async () => {
  render('app', await App());
})();
```

```typescript
// App.ts
import { a, div, h1, img, p } from '@sonnetjs/core';

const App = () => {
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
      p()
        .innerText('Edit src/main.ts and save to test HMR.')
        .className('read-the-docs')
        .get(),
    )
    .get();
};

export { App };
```

```css
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
}
```

You can run it using 

```bash
vite
```

## Documentation

### HTML Elements

sonnetjs/core provides a set of functions to create HTML elements. These functions return an object that represents the HTML element and provides chainable methods to set attributes, properties, and children.

```typescript
import { div, h1, p } from '@sonnetjs/core';

const element = div()
  .id('container')
  .className('container')
  .children(
    h1().innerText('Hello, World!').get(),
    p().innerText('This is a paragraph.').get(),
  )
  .get();
```

### Attributes and Properties

You can set attributes and properties of an HTML element using chainable methods.

```typescript
import { a, img } from '@sonnetjs/core';

const element = a()
  .href('https://example.com')
  .target('blank')
  .children(
    img()
      .src('https://example.com/image.jpg')
      .alt('Image')
      .get(),
  )
  .get();
```

### Children

You can add children to an HTML element using children method.

```typescript
import { div, h1, p } from '@sonnetjs/core';

const element = div()
  .children(
    h1().innerText('Hello, World!').get(),
    p().innerText('This is a paragraph.').get(),
  )
  .get();
```

### Events

You can add event listeners to an HTML element using js method.

```typescript
import { button } from '@sonnetjs/core';

const element = button()
  .innerText('Click me')
  .js((el) => {
    el.addEventListener('click', () => {
      console.log('Button clicked');
    });
  })
  .get();
```

### Refs

You can create refs to an HTML element using ref method.

```typescript
import { div, button, useRef } from '@sonnetjs/core';

let counter = 0;

const Component = () => {
  const divRef = useRef<HTMLDivElement>(null);

  return div()
    .children(
      button()
        .innerText('Click me')
        .js((el) => {
          el.addEventListener('click', () => {
            counter++;
            divRef.current.innerText = `Counter: ${counter}`;
          });
        })
        .get(),
      div()
        .ref(divRef)
        .innerText(`Counter: ${counter}`)
        .get(),
    )
    .get();
};
```

## License

sonnetjs/core is licensed under the MIT license.

