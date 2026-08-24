# SonnetJS

You don't always need node_modules, bundlers, a compiler, transpilers,
a virtual DOM, hydration, config files, or a dev server.

A zero-dependency, zero-build component boilerplate in vanilla JavaScript.
Classic scripts only — no bundler, no `npm install`, works when `index.html`
is opened straight from the filesystem (`file://`).

## Run

Open `index.html` in a browser. For auto-reload during development:

```bash
npx live-server
```

## Structure

```
index.html            entry page; loads scripts in dependency order
jsconfig.json         enables type checking + autocomplete in VS Code
src/
  styles.css          global styles (design tokens + page styles)
  core.js             the micro-framework: Component, mount(), $()
  components/         one file per component
    app.js            root App component (header, hero, live example, footer)
    counter.js        minimal Counter component (template + script hook)
    word-cycle.js     animated word rotator (lifecycle hooks + timer)
  main.js             entry point: mounts App into #app
```

Because these are classic scripts, load order in `index.html` matters:
`core.js` first, then component files, then `main.js` last.

## Core concepts

**Component** — subclass `Component`, define a static `template` (static,
trusted HTML only — dynamic values are set in `script` via `textContent`),
and wire behavior in `script(root)`:

```js
/**
 * @typedef {Object} GreetingProps
 * @property {string} [name] - Who to greet. Defaults to "world".
 */

/** @extends {Component<GreetingProps>} */
class Greeting extends Component {
    static template = `<p data-ref="text"></p>`

    /** @param {DocumentFragment} root */
    script(root) {
        $(root, '[data-ref="text"]').textContent = `Hello, ${this.props.name ?? 'world'}`
    }
}
```

The simplest components need nothing else (see `counter.js`). Components
with mutable state initialize it in a constructor and type it via the
second generic parameter: `@extends {Component<Props, State>}` (see
`word-cycle.js`).

**Props vs state** — `props` are passed in at construction and treated as
read-only. `state` is the component's own mutable data; change it with
`setState(patch)` and the component re-renders in place (template recloned,
`script` re-run, old DOM nodes replaced).

**Lifecycle** — override `onMount()` (after insertion) and `onDestroy()`
(before removal via `destroy()`); use them for timers, subscriptions, etc.

**Composition** — mount children inside `script` using placeholder elements:

```js
script(root) {
    mount($(root, '[data-ref="counter"]'), new Counter())
    mount($(root, '[data-ref="cycle"]'), new WordCycle({ words: ['bundlers', 'hydration'] }))
}
```

**Helpers** — `mount(element, component)` renders a component into an
element and returns it; `$(root, selector)` is `querySelector` that throws
if the element is missing instead of returning `null`.

## Adding a component

1. Create `src/components/<name>.js` with a `class <Name> extends Component`.
2. Document its props with a `@typedef` and `@extends {Component<Props, State>}`
   so call sites get autocomplete.
3. Add `<script src="./src/components/<name>.js"></script>` to `index.html`
   **before** `main.js`.

## Type checking

`jsconfig.json` turns on `checkJs`, so VS Code type-checks the JSDoc
annotations and provides autocomplete (e.g. prop names in
`new WordCycle({ ... })`). To check from the command line:

```bash
npx -p typescript tsc -p jsconfig.json
```

## Constraints to know

- Every top-level `class`/`function`/`const` is a global shared across all
  scripts — keep names unique.
- Templates are parsed once per class and cached; they cannot interpolate
  per-instance values (that's what `script` + `state` are for).
- `setState` replaces the component's DOM wholesale. Fine at this scale;
  if a component grows expensive, update nodes directly in event handlers
  instead (as `counter.js` does).
- The landing page displays `counter.js`'s source verbatim inside `App`'s
  template — when editing one, keep the other in sync. Backticks and `${`
  in that displayed snippet are escaped (`` \` ``, `\${`) because it lives
  inside a template literal.
