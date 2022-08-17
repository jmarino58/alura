	//import {activarDesactivarBotones} from './botones.js';
	
	/*consultar que es mejor si pasar valor como parametro o tomar los datos dsd el script	*/
	function encriptarFrase() {
		
		var frase = document.getElementById('textoPrincipal').value;
		var fraseEncriptada=document.getElementById('txt_cajaMensaje');
		var cajaMensaje=document.getElementById('cajaMensaje');
		var imagen1=document.getElementById('munheco');
		var mensaje= document.getElementById('mensaje');
		var botonCopiar= document.getElementById('botonCopiar');
			
			frase =frase.replace('e','enter');
			frase =frase.replace('i','imes');
			frase =frase.replace('a','ai');		
			frase =frase.replace('o','ober');
			frase =frase.replace('u','ufat');
			
			/*modifico tamaño contenedor*/
			imagen1.style.display="none";
			cajaMensaje.style.display ="none";
			fraseEncriptada.style.position="absolute"
			mensaje.style.top= '60px';
			mensaje.style.height='75%';
			
			/*ajuste de textArea y tipografia del texto*/
			
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
		
	