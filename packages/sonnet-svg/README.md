# sonnetjs/svg

sonnetjs/svg is a library for creating SVG elements using a simple and declarative API.

## Features

- Create SVG elements using a simple and declarative API.
- Set attributes and properties of SVG elements using chainable methods.
- Add children to SVG elements using children method.

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

4. Install sonnetjs/svg

```bash
npm i @sonnetjs/svg
```

5. Start the development server

```bash
npm run dev
```

## Documentation

This is a simple example of how to use sonnetjs/svg to create an SVG element.

```typescript
import { svg, rect } from '@sonnetjs/svg';

const element = svg()
  .width(100)
  .height(100)
  .children(rect().x(10).y(10).width(80).height(80).fill('red'));
```

## License

sonnetjs/svg is licensed under the MIT license.
