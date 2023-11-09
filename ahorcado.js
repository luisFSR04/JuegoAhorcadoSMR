String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


//Uso: palabraConGuiones = palabraConGuiones.replaceAt(*2, letra);

const palabras = ['perro', 'gato', 'casa', 'elefante'];

const palabra = palabras[Math.floor(Math.random()*palabras.length)];
let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0
document.querySelector('output').innerHTML = palabraConGuiones
document.querySelector('#calcular').addEventListener('click', () =>{
	const letra = document.querySelector('#letra').value;
	lethaFallado = true;}
)
	for(const i in palabra){
		if(letra == palabra[i])
		palabraConGuiones = palabraConGuiones.replace(i*2, letra);
		haFallado = false;
	}

	if(haFallado) {
		contadorFallos++;
		document.querySelector('#ahorcado').style.backgroundPosition = -(307*contadorFallos) + 'px'
		if(contadorFallos == 4){
			alert("perdiste el juego")
		}
	}else{
		if(palabraConGuiones.indexOf('_') <0){
			document.querySelector('#ganador').style.display ='flex'
	}


		document.querySelector('output').innerHTML = palabraConGuiones

	document.querySelector('#letra').value = '';
	document.querySelector('#letra').focus();
};
