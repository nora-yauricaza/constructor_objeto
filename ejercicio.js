window.addEventListener("load", function() {
	var boton = document.getElementById("mostrar");
	boton.addEventListener("click", function() {		
		var nombre = document.getElementById("nombre").value;
		var edad = parseInt(document.getElementById("edad").value);
		var sexo = document.getElementById("sexo").value;
		var resultado = new Persona(nombre,edad,sexo);
		console.log(resultado.presentacion());
	});

	function Persona(nombre, edad, sexo) {
		this.nombre = nombre;
		this.edad = edad;
		this.sexo = sexo;
		this.mayorDeEdad = (this.edad >= 18);
		this.presentacion = function () {
			return "Hola, mi nombre es " + this.nombre + ", tengo " + this.edad + ", soy " + 
					this.sexo + " y soy " + ((this.mayorDeEdad) ? "mayor" : "menor") + " de edad.";
		}; 
	};
});