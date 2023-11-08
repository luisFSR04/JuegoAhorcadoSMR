String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


//Uso: palabraConGuiones = palabraConGuiones.replaceAt(*2, letra);

const palabras = ['pelota', 'Valentín', 'mamaguevo', 'doble elefante telepata de guerra'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let const palabraConGuiones = palabra.replace(/./g, "_ ");

document.querySelector('output').innerHTML = palabraConGuiones
document.querySelector('#calcular').addEventListener('click', () =>{
	const letra = document.querySelector('#letra').value;
	alert(palabra)

	for(const i in palabra){
		if(letra == palabra[i])
		palabraConGuiones = palabraConGuiones.replace(i*2, letra);
		}
		document.querySelector('output').innerHTML = palabraConGuiones
})