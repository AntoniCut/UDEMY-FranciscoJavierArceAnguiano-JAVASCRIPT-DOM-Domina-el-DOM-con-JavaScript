window.onload = function(){
	//Recuperamos las fotos dentro de la división
	var fotos = document.querySelector("div");
	//Listener DOM 2
	fotos.addEventListener("click",function(e){
		console.log("Desde la división",e);
	}, false);

	document.getElementById("foto1").addEventListener("click",function(e){
		console.log("Desde la imagen",e);
		e.stopPropagation();
	}, false);
}