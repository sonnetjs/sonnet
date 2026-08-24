const appRoot = document.querySelector('#app')
if (!appRoot) {
    throw new Error('main: #app element not found')
}

mount(appRoot, new App())
