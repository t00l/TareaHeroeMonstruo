//crear una clase Humano, debe tener como propiedad  a que valocidad corre (lento, normal o rapid)
//crear un metodo de prototipo que muestre a que velocidad corre
//generar tres instancias que reciban como parametro la velocidad a la que corren
//luego mostrar a que velocidad corre cada instancia.
//]


function Humano(velocidad) {
 	this.velocidad = velocidad;
}

Humano.prototype.mostrar = function (){
	console.log(this.velocidad);
}

var velocidad1 = new Humano("rapido");
var velocidad2 = new Humano("normal");
var velocidad3 = new Humano("lento");

velocidad1.mostrar();
velocidad2.mostrar();
velocidad3.mostrar();

