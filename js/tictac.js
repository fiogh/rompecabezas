//Definicion de variables
var comienzo = 0
var final = 0
var tic = 0
var ejecucion = 0

function reloj(){
  //Calculo el tiempo pasado
	final = new Date();
	tic = final - comienzo
	tic = new Date(tic)
	var seg = tic.getSeconds()
	var min = tic.getMinutes()
	var hr = tic.getHours()-1
	if (min < 10){
		min = "0" + min
	}
	if (seg < 10){
		seg = "0" + seg
	}
  //Muestro el tiempo
	document.getElementById("tiempo").innerHTML = min + ":" + seg
  //Ejecuto de nuevo la funcion
	ejecucion = setTimeout("reloj()", 10)
}

function comenzarReloj(){
  //Inicializo el reloj
	comienzo = new Date();
  reloj()
}

function pararReloj(){
  //Detengo la ejecución del reloj
	clearTimeout(ejecucion);
}
