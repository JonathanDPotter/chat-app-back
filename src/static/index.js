class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header>
      <h1>Chat-Boy</h1>
    </header>
    `;
  }
}

class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const linkName = this.getAttribute("link-name") || "broken";

    this.innerHTML = `
    <footer>
      <span>Jonathan Potter 2023</span>
      <a href="/${linkName}">${linkName}</a>
    </footer>`;
  }
}

class Routes extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const routes = await (await fetch("http://localhost:1337/routes")).json();
    this.innerHTML = `<pre>${JSON.stringify(routes)}</pre>`;
  }
}

customElements.define("header-component", Header);
customElements.define("footer-component", Footer);
customElements.define("routes-component", Routes);
