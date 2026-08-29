# SonnetJS

You don't always need node_modules, bundlers, a compiler, transpilers,
a virtual DOM, hydration, reactivity, config files, or a dev server.

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
  core.js             the micro-framework: Component, mount(), $(), $$()
  components/         one file per component
    app.js            root App component (header, hero, live example, footer)
    counter.js        minimal Counter component (template + script hook)
    word-cycle.js     animated word rotator (self-scheduling timer)
  main.js             entry point: mounts App into #app
```

Because these are classic scripts, load order in `index.html` matters:
`core.js` first, then component files, then `main.js` last.

## Core concepts

**Component** — a class is nothing more than a static `template` (static,
trusted HTML only — dynamic values are set in `script` via `textContent`)
and a `script(root)` method:

```js
class Greeting extends Component {
    static template = `<p data-ref="text"></p>`

    /** @param {string} [name] - Who to greet. Defaults to "world". */
    constructor(name) {
        super()
        this.name = name
    }

    /** @param {DocumentFragment} root */
    script(root) {
        $(root, '[data-ref="text"]').textContent = `Hello, ${this.name ?? 'world'}`
    }
}
```

That's the whole contract — `Component` itself holds no other data or
methods. Any config a component needs (words to cycle through, a name to
greet) is just a field the subclass's own constructor assigns to `this`;
there's no built-in `props` object. There's also no state or re-render
mechanism — mutable data (a counter, a cycle index) lives in a plain closure
variable inside `script`, and updates happen by mutating the rendered DOM
directly in event handlers or timers, exactly as you'd write it with no
framework at all (see `counter.js`, `word-cycle.js`).

**Composition** — mount children inside `script` using placeholder elements:

```js
script(root) {
    mount($(root, '[data-ref="counter"]'), new Counter())
    mount($(root, '[data-ref="cycle"]'), new WordCycle({ words: ['bundlers', 'hydration'] }))
}
```

**Helpers** — `mount(element, component)` clones the component's template,
runs its `script`, appends the result into `element`, and returns the
component; `$(root, selector)` is `querySelector` that throws if the
element is missing instead of returning `null`; `$$(root, selector)` is
`querySelectorAll` that returns a plain array instead of a `NodeList`.

## Adding a component

1. Create `src/components/<name>.js` with a `class <Name> extends Component`.
2. If it needs config, give it a constructor that assigns fields to `this`
   (document params with `@param` so call sites get autocomplete).
3. Add `<script src="./src/components/<name>.js"></script>` to `index.html`
   **before** `main.js`.

## Type checking

`jsconfig.json` turns on `checkJs`, so VS Code type-checks the JSDoc
annotations and provides autocomplete (e.g. constructor config keys in
`new WordCycle({ ... })`). To check from the command line:

```bash
npx -p typescript tsc -p jsconfig.json
```

## Constraints to know

- Every top-level `class`/`function`/`const` is a global shared across all
  scripts — keep names unique.
- Templates are parsed once per class and cached on the class itself; they
  cannot interpolate per-instance values — set those in `script` via
  `textContent` instead.
- There's no re-render step: `script` runs once per mount, so dynamic
  updates must mutate the DOM directly from event handlers/timers, keeping
  any mutable data in closure variables (as `counter.js` and
  `word-cycle.js` do).
- There's no unmount/`destroy()` either. `mount()` only ever appends —
  removing a component is a matter of holding onto a DOM reference (the
  host element, or a node returned from `script`) and calling `.remove()`
  on it yourself, same as with no framework.
- The landing page displays `counter.js`'s source verbatim inside `App`'s
  template — when editing one, keep the other in sync. Backticks and `${`
  in that displayed snippet are escaped (`` \` ``, `\${`) because it lives
  inside a template literal.
