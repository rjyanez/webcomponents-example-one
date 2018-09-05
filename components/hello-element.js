
class HelloElement extends HTMLElement {
	constructor(){
		super();
	}
  // Observar los cambios en el atributo 'name'.
  static get observedAttributes() {return ['name']; }

  get name(){
  	return this.getAttribute('name');
  }

  set name(val){
  	this.setAttribute('name', val);
  }

  // Responder a los cambios en el atributo.
  attributeChangedCallback(attr, oldValue, newValue) {
    if (attr == 'name') {
      this.textContent = `Hello, ${newValue}`;
    }
  }

  connectedCallback(){

  }
}
// Definir el nuevo elemento
customElements.define('hello-element', HelloElement);
  