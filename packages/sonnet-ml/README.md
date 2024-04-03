# sonnetjs/mathml

sonnetjs/mathml is a library for creating MathML elements in JavaScript. It provides a set of functions to create MathML elements and provides chainable methods to set attributes, properties, and children.

## Features

- Create MathML elements using functions.
- Set attributes and properties of MathML elements using chainable methods.
- Add children to MathML elements using children method.

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

4. Install sonnetjs/mathml

```bash
npm i @sonnetjs/mathml
```

4. Start the development server

```bash
npm run dev
```

## Documentation

### MathML Elements

You can create MathML elements using functions.

```typescript
import { math, mrow, mi, mo } from '@sonnetjs/mathml';

const element = math()
  .children(
    mrow()
      .children(
        mi().innerText('x').get(),
        mo().innerText('+').get(),
        mi().innerText('y').get(),
      )
      .get(),
  )
  .get();
```

## License

sonnetjs/mathml is licensed under the MIT license.
