/**
 * Minimal click counter — initial content in the template, behavior wired
 * in `script`. Its source is displayed verbatim on the landing page — keep
 * the two in sync when editing (src/components/app.js, "how" section).
 * @extends {Component}
 */
class Counter extends Component {
    static template = `<button>count is 0</button>`

    /** @param {DocumentFragment} root */
    script(root) {
        let count = 0
        const button = root.querySelector('button')
        button.addEventListener('click', () => {
            button.textContent = `count is ${++count}`
        })
    }
}
