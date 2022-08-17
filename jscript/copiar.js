function copiarPortapapeles(){
	var textArea= document.getElementById('txt_cajaMensaje').value;
	var msjCopiado=document.getElementById('copiado');
	
	msjCopiado.style.visibility='visible';
	navigator.clipboard.writeText(textArea);
	setTimeout(ocultar,1000);
};

function ocultar(){
	var msjCopiado=document.getElementById('copiado');
	msjCopiado.style.visibility='hidden';
	
};

