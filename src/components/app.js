/**
 * Root application shell. Static chrome lives in the template; child
 * components are mounted into placeholder elements in `script`.
 * @extends {Component}
 */
class App extends Component {
    static template = `
        <div class="app">
            <header class="header">
                <span class="brand">SonnetJS</span>
                <span class="badge">v0.1.0</span>
            </header>

            <main class="main">
                <section class="hero">
                    <h1 class="title">SonnetJS</h1>
                    <p class="tagline">
                        You don't always need <span data-ref="cycle"></span>
                    </p>
                </section>

                <section class="how">
                    <div class="card example">
                        <div class="example-preview" data-ref="counter"></div>
                        <pre class="code-block"><code><span class="tok-kw">class</span> <span class="tok-cls">Counter</span> <span class="tok-kw">extends</span> <span class="tok-cls">Component</span> {
    <span class="tok-kw">static</span> template = <span class="tok-str">\`&lt;button&gt;count is 0&lt;/button&gt;\`</span>

    <span class="tok-fn">script</span>(root) {
        <span class="tok-kw">let</span> count = 0
        <span class="tok-kw">const</span> button = root.<span class="tok-fn">querySelector</span>(<span class="tok-str">'button'</span>)
        button.<span class="tok-fn">addEventListener</span>(<span class="tok-str">'click'</span>, () =&gt; {
            button.textContent = <span class="tok-str">\`count is \${++count}\`</span>
        })
    }
}</code></pre>
                    </div>
                    <p class="hint">
                        Edit <code>src/components/counter.js</code> and reload to see changes
                    </p>
                </section>

            </main>

            <footer class="footer">
                <p>No bundler. No dependencies. Open <code>index.html</code> and go.</p>
            </footer>
        </div>
    `

    /** @param {DocumentFragment} root */
    script(root) {
        mount($(root, '[data-ref="cycle"]'), new WordCycle({
            words: [
                'node_modules',
                'bundlers',
                'a compiler',
                'transpilers',
                'a virtual DOM',
                'hydration',
                'config files',
                'a dev server',
            ],
            interval: 2000,
        }))

        mount($(root, '[data-ref="counter"]'), new Counter())
    }
}
