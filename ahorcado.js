let contadorFallos = 0;
const palabras = ["pelotudos", "aplicaciones web", "maradona", "albondigas", "messi"]; //palabras para el juego

const palabra = palabras[Math.floor(Math.random() * palabras.length)]; //palabra random que aparecerá
let palabrasConGuiones = palabra.replace(/./g, "_ "); //remplazar las palabras por guion y espacio /g es global

id("output").innerHTML = palabrasConGuiones; //imprime en <p>, palabrasConGuiones

const button = id("calcular");
button.addEventListener("click", jugar);

function jugar() {

	let letra = id("letra").value;		//obtener el valor de la letra ingresada en id letra y guardarla en la const letra.
	letra = letra.toLowerCase(); 		//convertir letra ingresada en minuscula

	let haFallado = true;

	for (const i in palabra) {
		if (letra == palabra[i]) {		//remplaza si encuentra la letra ingresada en palabra.
			palabrasConGuiones = reemplazar(palabrasConGuiones, i * 2, letra);
			haFallado = false;
		}
	}

	/* condición de ganador o perdedor */
	if (haFallado) {
		contadorFallos++;
		moveImg();
	if (contadorFallos > 2) {
		moveImg2();
	}
	if (contadorFallos >= 5) {
		msjPerdio();
		button.disabled = true;
	}
	} else {
	  if (palabrasConGuiones.indexOf("_") < 0) {
		msjGano();
		button.disabled = true;
	  }
	}

	/* reemplazar los datos de id output por la variable palabra con guiones */
	id("output").innerHTML = palabrasConGuiones;
}


function reemplazar(palabra,index, character) {
	return (
		palabra.substring(0, index) + 		//elimina los "_ " hasta donde se encontro index
		character + 						//ingresael caracter que se ingreso
		palabra.substring(index + character.length) 	//rellena los demás "_ "
	);
};

function msjPerdio() {
	id("resultado").innerHTML = "Perdiste, has sido ahorcado.";
	id("resultado").style.backgroundColor = "#0c5ca7";
}

function msjGano() {
	id("resultado").innerHTML = "¡¡HAS GANADO !!";
	id("resultado").style.backgroundColor = "#0c5ca7";
}

function moveImg() {
	id("ahorcado").style.backgroundPosition = -(180 * contadorFallos) + "px 0px";
}
function moveImg2() {
	id("ahorcado").style.backgroundPosition = -(198 * contadorFallos) + "px 220px";
}

function id(variable) {
	return document.getElementById(variable);
}