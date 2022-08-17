	function desencriptarFrase() {
		/*declaración de variables*/
		var frase = document.getElementById('textoPrincipal').value;
		var fraseEncriptada=document.getElementById('txt_cajaMensaje');
		var cajaMensaje=document.getElementById('cajaMensaje');
		var imagen1=document.getElementById('munheco');
		var mensaje= document.getElementById('mensaje');
		var botonCopiar= document.getElementById('botonCopiar');
		
		/*desarrollo de funcionalidad de desencriptado*/
		frase =frase.replace('enter','e');
		frase =frase.replace('imes','i');
		frase =frase.replace('ai','a');		
		frase =frase.replace('ober','o');
		frase =frase.replace('ufat','u');
	
			/*modifico tamaño contenedor*/
			imagen1.style.display="none";
			cajaMensaje.style.display ="none";
			fraseEncriptada.style.position="absolute"
			mensaje.style.top= '60px';
			mensaje.style.height='75%';
			
			/*ajuste de textArea y tipografia del texto asignandole una nueva clase/estilo*/
			fraseEncriptada.className='mensaje1Procesado';
			
			/*asignación de valor desencriptado a caja de texto*/
			fraseEncriptada.innerText=frase;
			
			/*activo botón y lo muestro*/
			botonCopiar.style.visibility='visible';
			botonCopiar.disabled=false;
			
			//limpio área de texto y deshabilito botones Encriptar-Desencriptar
			document.getElementById('textoPrincipal').value="";
			activarDesactivarBotones();
		
		};