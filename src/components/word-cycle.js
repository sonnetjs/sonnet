/**
 * @typedef {Object} WordCycleProps
 * @property {string[]} words - Words to cycle through, in order.
 * @property {number} [interval] - Milliseconds between words. Defaults to 2000.
 */

/**
 * Cycles through a list of words on a timer, demonstrating the
 * onMount/onDestroy lifecycle hooks. Each swap first plays the `.word-out`
 * exit animation on the current node, then re-renders; the freshly inserted
 * node plays the `.word-cycle` entrance animation. The exit delay below must
 * match the `word-out` animation duration in styles.css.
 * @extends {Component<WordCycleProps, {index: number}>}
 */
class WordCycle extends Component {
    /** Must match the `word-out` animation duration in styles.css. */
    static EXIT_MS = 200

    static template = `<span class="word-cycle" data-ref="word"></span>`

    /** @type {number | undefined} */
    #timer

    /** @type {number | undefined} */
    #exitTimer

    /** @type {HTMLElement | undefined} */
    #word

    /** @param {WordCycleProps} props */
    constructor(props) {
        super(props)
        this.state = { index: 0 }
    }

    /** @param {DocumentFragment} root */
    script(root) {
        this.#word = $(root, '[data-ref="word"]')
        this.#word.textContent = this.props.words[this.state.index]
    }

    onMount() {
        this.#timer = setInterval(() => {
            this.#word?.classList.add('word-out')
            this.#exitTimer = setTimeout(() => {
                this.setState({ index: (this.state.index + 1) % this.props.words.length })
            }, WordCycle.EXIT_MS)
        }, this.props.interval ?? 2000)
    }

    onDestroy() {
        clearInterval(this.#timer)
        clearTimeout(this.#exitTimer)
    }
}
