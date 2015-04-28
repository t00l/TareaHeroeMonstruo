/*w

EJERCICIO DE HOY!
Crear una clase de Monstruo que tenga como parámetros, salud, poder de ataque y raza.
Crear un método de prototipo que reciba una instancia de Heroe y que este método 
le descuente la energia al heroe.
Si la energia del heroe llega por debajo de 0, debe indicar que el heroe se murió.
Crear una clase de Heroe que tenga como parámetros salud poder de ataque y raza.
Crear un metodo de prototipo que reciba una instancia de Monstruo y que este metodo 
le descuente energia al monstruo.
Si la energia el monstruo llega por debajo de 0, debe indicar que el heroe mató al
 monstruo. A la clase de Heroe, agregar la propiedad de experiencia.
Cada vez que el heroe mate a un monstruo, debe aumentar su experiencia. 
Si la experiencia que tiene el heroe es mayor que un múltiplo de 1000, el heroe 
debe subir de nivel y multiplicar su ataque y salud por el nivel del heroe.
Crear otro metodo de prototipo que reciba un una instancia de la clase poción y 
esta aumente la cantidad de salud del heroe.
Crear una clase Poción que reciba como parametro la cantidad de energia que recupera.
*/
var
descEnergiaM = new Monstruo(); //instancia de Monstruo que resta energia a M.
descEnergiaH = new Heroe();// instancia de Heroe que resta energia a H.
pocionSalud = new Pocion();//aumenta salud del heroe


function Monstruo (saludM, poderAtaqueM, razaM){
	this.saludM = saludM;
	this.poderAtaqueM =  poderAtaqueM;
	this.razaM = razaM;
};

function Heroe (saludH, poderAtaqueH, razaH){
	this.saludH = saludH;
	this.poderAtaqueH =  poderAtaqueH;
	this.razaH = razaH;
	this.experiencia = 0; 
};

function Pocion(cantidadSaludRecupera){
	this.cantidadSaludRecupera = cantidadSaludRecupera;
}


Heroe.prototype.energiaH = function(descEnergiaH){
	var salud = this.saludH;
	salud = salud - descEnergiaH;
	if (salud > 0){
		salud = (salud - descEnergiaH);
		console.log("Auch! el heroe recibio un ataque de " + descEnergiaH);}
	else{
		console.log("El heroe murió!");	
	}
};


Monstruo.prototype.energiaM = function(descEnergiaM){
	var salud = this.saludM;
	salud = (salud - descEnergiaM);
	if (salud > 0){
		salud = (salud - descEnergiaM);
		console.log("Auch! el monstruo recibio un ataque de " + descEnergiaM)}
	else{
		console.log("El monstruo murió!");	
	}
};


Pocion.prototype.UpSalud = function(pocionSalud){
	var nuevaSaludHconP = (this.saludH + pocionSalud);

}
heroe = new Heroe(10);	
heroe.energiaH(15);
