/***********
 * Variables
 * *********/
 var palabras = ["tortuga","gato","perro", "abeja", "perico", "tigre", "venado", "zorrillo", "ballena", "pantera", "oveja","cocodrilo","caballo","dinosaurio","escarabajo","rinoceronte","leopardo","jirafa","elefante","hipopotamo","unicornio","serpiente","gacela","mapache","chimpance","gorila","burro","zebra","leon","hormiga","manati","orangutan","mosquito","gallina","conejo","koala","tecolote"]; 
 var game = {c:15, r:15, letras:[], numPalabras:25, palabras:[], seleccionadas:[]};
 var b,a;
 /***********
 * Inicio
 * *********/
 window.onload = function() {
 	crearTablero();
 	anexarPalabras();
 	completarTablero();
 	listarPalabras();
 	encabezado();
 }
 /***********
 * Funciones
 * *********/
 function crearTablero() {
 	var i = 0;
    for (var r = 0; r < game.r; r++) {
        for (var c = 0; c < game.c; c++) {
           b = document.createElement("div");
           b.innerText = "*";
           a = document.createAttribute("id");
           a.value = "celda-"+c+"-"+r;
           b.setAttributeNode(a);
           //
           a = document.createAttribute("class");
           a.value = "celda";
           b.setAttributeNode(a);
           //
           b.addEventListener("click",(e)=>{
            var id = e.target.id;
            console.log(id);
           },false);
           //
           document.getElementById("tablero").appendChild(b);
           //
           game.letras.push({r:r, c:c, i:i, letra:"*"});
           //
           i++;
        }
    }
    console.log(game.letras);
 }
function anexarPalabras() {
 	// body...
 }
 function completarTablero() {
 	// body...
 }
 function listarPalabras() {
 	// body...
 }
 function encabezado() {
 	// body...
 }