# sonnetjs/html

sonnetjs/html is a framework for building web applications with a focus on simplicity and performance with native feel. It is built on top of vanilla JavaScript.

## Features

- **Simple**: sonnetjs/html is designed to be simple and easy to use. It is built on top of vanilla JavaScript and does not require any additional dependencies.

- **Performance**: sonnetjs/html is designed to be fast and lightweight. It is built with performance in mind and does not include any unnecessary features.

- **Native feel**: sonnetjs/html is designed to provide a native feel to web applications. It uses modern web technologies to provide a smooth and responsive user experience.

## Usage

1. Run the following command to create a new SonnetJS project.

```bash
npx create-sonnet-app@latest
```

2. Change directory to the newly created project.

```bash
cd [my-sonnet-app]
```

3. Install the dependencies

```bash
npm i
```

4. Start the development server

```bash
npm run dev
```

## Documentation

### HTML Elements

sonnetjs/html provides a set of functions to create HTML elements. These functions return an object that represents the HTML element and provides chainable methods to set attributes, properties, and children.

```typescript
import { div, h1, p } from '@sonnetjs/html';

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
import { a, img } from '@sonnetjs/html';

const element = a()
  .href('https://example.com')
  .target('blank')
  .children(img().src('https://example.com/image.jpg').alt('Image').get())
  .get();
```

### Children

You can add children to an HTML element using children method.

```typescript
import { div, h1, p } from '@sonnetjs/html';

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
import { button } from '@sonnetjs/html';

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
import { div, button, useRef } from '@sonnetjs/html';

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
      div().ref(divRef).innerText(`Counter: ${counter}`).get(),
    )
    .get();
};
```

## License

sonnetjs/html is licensed under the MIT license.
