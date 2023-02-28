class CustomComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });
        this.render();
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'title' && oldValue !== newValue) {
            this.title = newValue;
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = '';
        const _style = document.createElement('style');
        const _template = document.createElement('template');

        _style.innerHTML = `h1 {color: tomato;}`;
        _template.innerHTML = `<h1>${this.title}</h1>`;

        this.shadowRoot.appendChild(_style);
        this.shadowRoot.appendChild(_template.content.cloneNode(true));
    }
}

if (!customElements.get('some-web-component')) {
    customElements.define('some-web-component', CustomComponent);
}
