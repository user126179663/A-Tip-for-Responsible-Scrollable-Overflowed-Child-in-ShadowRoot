class CustomElement extends HTMLElement {
	
	constructor() {
		
		super();
		
		const	root = document.createElement('section'),
				link = document.createElement('link'),
				article = document.createElement('article');
		
		link.rel = 'stylesheet',
		link.href = 'shadow.css',
		
		article.appendChild(document.createElement('div')),
		
		root.append(document.createElement('header'), article, document.createElement('footer')),
		
		this.attachShadow({ mode: 'open' }).append(link, root)
		
	}
	
}
customElements.define('custom-element', CustomElement);