/**
 * Cycles through a list of words on a timer, the same way you'd write it
 * with plain DOM APIs: a closure variable for the current index, and two
 * chained `setTimeout`s that mutate the same node directly. Each swap plays
 * the `.word-out` exit animation, then (once it finishes) swaps the text and
 * forces the `.word-cycle` entrance animation to replay by removing the
 * class, forcing a reflow, and re-adding it. The exit delay below must match
 * the `word-out` animation duration in styles.css.
 *
 * Note: once mounted, the timer chain runs forever — there's no unmount
 * hook to cancel it against.
 * @extends {Component}
 */
class WordCycle extends Component {
    /** Must match the `word-out` animation duration in styles.css. */
    static EXIT_MS = 200

    static template = `<span class="word-cycle" data-ref="word"></span>`

    /**
     * @param {Object} config
     * @param {string[]} config.words - Words to cycle through, in order.
     * @param {number} [config.interval] - Milliseconds between words. Defaults to 2000.
     */
    constructor({ words, interval = 2000 }) {
        super()
        this.words = words
        this.interval = interval
    }

    /** @param {DocumentFragment} root */
    script(root) {
        const word = $(root, '[data-ref="word"]')
        let index = 0

        const show = () => {
            word.classList.remove('word-cycle', 'word-out')
            void word.offsetWidth
            word.textContent = this.words[index]
            word.classList.add('word-cycle')
        }

        const cycle = () => {
            setTimeout(() => {
                word.classList.add('word-out')
                setTimeout(() => {
                    index = (index + 1) % this.words.length
                    show()
                    cycle()
                }, WordCycle.EXIT_MS)
            }, this.interval)
        }

        word.textContent = this.words[index]
        cycle()
    }
}
