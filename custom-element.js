class CustomElement extends HTMLElement {
	
	constructor() {
		
		super();
		
		const	root = document.createElement('section'),
				link = document.createElement('link'),
				article = document.createElement('article');
		
		this.attachShadow({ mode: 'open' }),
		
		link.rel = 'stylesheet',
		link.href = 'shadow.css',
		
		root.id = 'root',
		
		article.appendChild(document.createElement('div')),
		
		root.append(document.createElement('header'), article, document.createElement('footer')),
		
		this.shadowRoot.append(link, root)
		
	}
	
}
customElements.define('custom-element', CustomElement);