function Chat (mensaje){ //VER PROTOTIPOS JAVASCRIPT
	this.mensaje = mensaje;
	this.guardar = function(){
		console.log("Metodo clase");
	}
}

Chat.prototype.guardar = function(){
	console.log("Metodo prototipe");
} 

var chat = new Chat("Hola Mundo");
chat.__proto__.guardar(); //tratar de no hacer con los dos __
chat.guardar();

console.log(chat);
