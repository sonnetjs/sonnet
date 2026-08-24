/**
 * Per-class cache of parsed `<template>` elements, keyed by component class.
 * @type {WeakMap<Function, HTMLTemplateElement>}
 */
const templateCache = new WeakMap()

/**
 * Base class for template-driven components.
 *
 * Subclasses define a static {@link Component.template} HTML string and
 * optionally override {@link Component#script} to attach behavior to the
 * rendered DOM. Components hold immutable {@link Component#props} passed at
 * construction and mutable {@link Component#state}; calling
 * {@link Component#setState} re-renders the component in place.
 *
 * @template [P=Object] Type of the props object accepted by the constructor.
 * @template [S=Object] Type of the component's mutable state.
 *
 * @example
 * /** @extends {Component<{label?: string}, {on: boolean}>} *\/
 * class Toggle extends Component {
 *     static template = '<button type="button"></button>'
 *
 *     constructor(props = {}) {
 *         super(props)
 *         this.state = { on: false }
 *     }
 *
 *     script(root) {
 *         const btn = $(root, 'button')
 *         btn.textContent = `${this.props.label ?? 'Toggle'}: ${this.state.on ? 'on' : 'off'}`
 *         btn.addEventListener('click', () => this.setState({ on: !this.state.on }))
 *     }
 * }
 */
class Component {
    /**
     * HTML template for the component. Must be overridden by subclasses.
     * Static, trusted markup only — never interpolate user data here; set
     * dynamic content in {@link Component#script} via `textContent`.
     * @type {string}
     */
    static template = ''

    /**
     * Data passed to the component at construction. Treat as read-only;
     * use {@link Component#state} for values that change.
     * @type {P}
     */
    props

    /**
     * The component's mutable state. Change it with
     * {@link Component#setState} so the component re-renders.
     * @type {S}
     */
    state = /** @type {S} */ ({})

    /**
     * Live top-level DOM nodes while mounted; empty when not mounted.
     * @type {ChildNode[]}
     */
    #nodes = []

    /**
     * @param {P} [props] - Data made available to the component as
     *     `this.props`.
     */
    constructor(props = /** @type {P} */ ({})) {
        this.props = props
    }

    /**
     * Hook for attaching behavior (text content, event listeners, child
     * components) to the rendered DOM. Called on every render with the
     * cloned template content before it is inserted. Default is a no-op.
     *
     * @param {DocumentFragment} root - The cloned template content.
     * @returns {void}
     */
    script(root) { }

    /**
     * Lifecycle hook: called once after the component is inserted into its
     * host element. Default is a no-op.
     * @returns {void}
     */
    onMount() { }

    /**
     * Lifecycle hook: called just before {@link Component#destroy} removes
     * the component from the DOM. Default is a no-op.
     * @returns {void}
     */
    onDestroy() { }

    /**
     * Whether the component is currently in the DOM.
     * @type {boolean}
     */
    get isMounted() {
        return this.#nodes.length > 0
    }

    /**
     * The parsed `<template>` element for this class, built from
     * {@link Component.template} on first access and cached per subclass.
     *
     * @type {HTMLTemplateElement}
     * @throws {Error} If the subclass does not define a static template.
     */
    static get templateElement() {
        let cached = templateCache.get(this)
        if (!cached) {
            if (!this.template) {
                throw new Error(`${this.name}: no static template defined`)
            }
            cached = document.createElement('template')
            cached.innerHTML = this.template
            templateCache.set(this, cached)
        }
        return cached
    }

    /**
     * Clones the template content and runs {@link Component#script} on it.
     *
     * @returns {DocumentFragment} The rendered DOM fragment, ready to be
     *     inserted into the document.
     */
    render() {
        const ctor = /** @type {typeof Component} */ (this.constructor)
        const root = /** @type {DocumentFragment} */ (
            ctor.templateElement.content.cloneNode(true)
        )
        this.script(root)
        return root
    }

    /**
     * Renders the component and appends it to the given host element.
     * Prefer the standalone {@link mount} helper at call sites.
     *
     * @param {Element} host - The element to render the component into.
     * @returns {void}
     * @throws {Error} If host is not an element or the component is already
     *     mounted.
     */
    mount(host) {
        if (!(host instanceof Element)) {
            throw new Error(`${this.constructor.name}: mount target must be a DOM element`)
        }
        if (this.isMounted) {
            throw new Error(`${this.constructor.name}: already mounted`)
        }
        const fragment = this.render()
        this.#nodes = [...fragment.childNodes]
        host.appendChild(fragment)
        this.onMount()
    }

    /**
     * Re-renders the mounted component in place, replacing its current DOM
     * nodes with a fresh render. Usually invoked indirectly via
     * {@link Component#setState}.
     *
     * @returns {void}
     * @throws {Error} If the component is not mounted.
     */
    update() {
        if (!this.isMounted) {
            throw new Error(`${this.constructor.name}: update() called before mount`)
        }
        const fragment = this.render()
        const newNodes = [...fragment.childNodes]
        const first = this.#nodes[0]
        first.parentNode?.insertBefore(fragment, first)
        for (const node of this.#nodes) {
            node.remove()
        }
        this.#nodes = newNodes
    }

    /**
     * Merges a partial state object into {@link Component#state} and
     * re-renders if mounted.
     *
     * @param {Partial<S>} patch - State keys to update.
     * @returns {void}
     */
    setState(patch) {
        Object.assign(this.state, patch)
        if (this.isMounted) {
            this.update()
        }
    }

    /**
     * Removes the component from the DOM, calling
     * {@link Component#onDestroy} first. Safe to call when not mounted.
     * @returns {void}
     */
    destroy() {
        if (!this.isMounted) {
            return
        }
        this.onDestroy()
        for (const node of this.#nodes) {
            node.remove()
        }
        this.#nodes = []
    }
}

/**
 * Renders a component into the given DOM element.
 *
 * @template {Component<any, any>} C
 * @param {Element} root - The element to render the component into.
 * @param {C} component - The component instance to mount.
 * @returns {C} The mounted component, for later `update()`/`destroy()`.
 */
function mount(root, component) {
    component.mount(root)
    return component
}

/**
 * Queries a required element, throwing if it is missing — keeps component
 * scripts free of null checks and gives a clear error when a template and
 * its script drift apart.
 *
 * @template {Element} [T=HTMLElement]
 * @param {ParentNode} root - Fragment or element to search within.
 * @param {string} selector - CSS selector for the element.
 * @returns {T} The matched element.
 * @throws {Error} If no element matches.
 */
function $(root, selector) {
    const el = root.querySelector(selector)
    if (!el) {
        throw new Error(`$: no element found for selector "${selector}"`)
    }
    return /** @type {T} */ (el)
}
