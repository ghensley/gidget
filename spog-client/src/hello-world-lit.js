import { LitElement, css, html } from "lit";

export class HelloWorldLit extends LitElement {
    static properties = {
        title: {},
    };
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
    :host {
      color: blue;
    }
  `;

    // Render the UI as a function of component state
    render() {
        return html`<h2>${this.getAttribute("title")}!</h2>`;
    }
}
customElements.define("hello-world-lit", HelloWorldLit);
