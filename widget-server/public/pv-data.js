class CustomComponent extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    static get observedAttributes() { return ['data']; }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'data' && oldValue !== newValue) {
            this.data = JSON.parse(newValue);
        }
        this.render();
    }

    render() {
        this.innerHTML = '';
        const _style = document.createElement('style');
        const _template = document.createElement('template');

        _style.innerHTML = `h1 {color: tomato;}`;
        console.log("data", this.data)
        _template.innerHTML = `<h1>PV Data: ${this.data?.pvValue}</h1>`;

        this.appendChild(_style);
        this.appendChild(_template.content.cloneNode(true));
    }
}

if (!customElements.get('pv-data')) {
    customElements.define('pv-data', CustomComponent);
}
