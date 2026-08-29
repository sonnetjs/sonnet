/**
 * Base class for template-driven components. A component is nothing more
 * than a static {@link Component.template} HTML string and a
 * {@link Component#script} method that wires up behavior on the cloned
 * template content — reading whatever fields the subclass's own constructor
 * stored on it, querying the DOM, and attaching event listeners directly,
 * exactly as you'd do with no framework at all. Inserting a component into
 * the page is a separate concern, handled by the standalone {@link mount}
 * function, not by the class itself.
 *
 * @example
 * class Toggle extends Component {
 *     static template = '<button type="button"></button>'
 *
 *     script(root) {
 *         let on = false
 *         const btn = $(root, 'button')
 *         btn.textContent = 'Toggle: off'
 *         btn.addEventListener('click', () => {
 *             on = !on
 *             btn.textContent = `Toggle: ${on ? 'on' : 'off'}`
 *         })
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
     * Cache slot for {@link Component.templateElement}, declared here only
     * so `Component` itself has one (value `undefined`). Subclasses never
     * redeclare it — when the getter below assigns `this._templateElement`,
     * `this` is the subclass being accessed, so that assignment creates a
     * separate *own* property on that subclass, shadowing this one. Every
     * subclass ends up with its own cache slot despite sharing this one
     * inherited getter — no external map needed to keep them apart.
     * @type {HTMLTemplateElement | undefined}
     */
    static _templateElement

    /**
     * The parsed `<template>` element for this class, built from
     * {@link Component.template} on first access and cached on the class
     * itself as {@link Component._templateElement}.
     *
     * @type {HTMLTemplateElement}
     * @throws {Error} If the subclass does not define a static template.
     */
    static get templateElement() {
        if (!Object.hasOwn(this, '_templateElement')) {
            if (!this.template) {
                throw new Error(`${this.name}: no static template defined`)
            }
            const el = document.createElement('template')
            el.innerHTML = this.template
            this._templateElement = el
            return el
        }
        return /** @type {HTMLTemplateElement} */ (this._templateElement)
    }

    /**
     * Hook for attaching behavior (text content, event listeners, child
     * components) to the rendered DOM. Called once, with the cloned
     * template content, before it is inserted. Default is a no-op.
     *
     * @param {DocumentFragment} root - The cloned template content.
     * @returns {void}
     */
    script(root) { }
}

/**
 * Clones the component's template, runs its {@link Component#script}, and
 * appends the result to `host`.
 *
 * @template {Component} C
 * @param {Element} host - The element to render the component into.
 * @param {C} component - The component instance to mount.
 * @returns {C} `component`, for convenience at the call site.
 * @throws {Error} If host is not a DOM element.
 */
function mount(host, component) {
    if (!(host instanceof Element)) {
        throw new Error('mount: target must be a DOM element')
    }
    const ctor = /** @type {typeof Component} */ (component.constructor)
    const fragment = /** @type {DocumentFragment} */ (
        ctor.templateElement.content.cloneNode(true)
    )
    component.script(fragment)
    host.appendChild(fragment)
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

/**
 * Queries all matching elements as a plain array — `querySelectorAll` with
 * an array instead of a `NodeList`, so call sites can `.map`/`.filter`
 * directly. Unlike {@link $}, an empty match is not an error.
 *
 * @template {Element} [T=HTMLElement]
 * @param {ParentNode} root - Fragment or element to search within.
 * @param {string} selector - CSS selector for the elements.
 * @returns {T[]} The matched elements, possibly empty.
 */
function $$(root, selector) {
    return /** @type {T[]} */ ([...root.querySelectorAll(selector)])
}
