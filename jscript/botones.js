function activarDesactivarBotones(){
		var frase = document.getElementById('textoPrincipal').value;
		var boton1 = document.getElementById('botonEncriptar');
		var boton2 = document.getElementById('botonDesencriptar');

		if (frase.length!=0){
		boton1.disabled=false;
		boton2.disabled=false;
		}else{
				boton1.disabled=true;
				boton2.disabled=true;
		}
		
	};
	