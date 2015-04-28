/*Crear una clase deportista, que reciba como parametro su especialidad
(saltoc on garrocha, maratonista, etc)
Crear un metodo de prototipo que imprima "El deportista esta haciendo la especialidad de 
"NombreEspecialidad"
Crear otro metodo de prototipo que  reciba otra especialidad y que intente
realizarla. Si es la misma especialidad querealiza, realizarla. Si no, indicar una alerta
y realizar la especialidad de todos modos.

*/

function Deportista (especialidad) {
	this.especialidad = especialidad;
}

Deportista.prototype.mostrarEspecialidad = function(){
	console.log("La especialidad del  deportista es " + this.especialidad);
};

Deportista.prototype.mostrar = function(especialidad2){
	if(especialidad2 == this.mostrarEspecialidad){
		mostrarEspecialidad();}else{
			console.log("No es mi especialidad");
	};
};

var especialidad1 = new Deportista("maratonista");
var especialidad2 = new Deportista("tacataca")
var especialidad3 = new Deportista("karateka");

especialidad1.mostrarEspecialidad();
especialidad1.mostrar("tacataca");
especialidad1.mostrar("maratonista");

