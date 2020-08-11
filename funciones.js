//-------------------Funciones pagina 3-------------
function cambiarTamanio(){
  var t = 1;
  for (i = 0; i < 5; i++) {
      document.getElementById("She").style.fontSize = t + "em";
      document.getElementById("Pha").style.fontSize = (t + 10) + "em";
      document.getElementById("Van").style.fontSize = (t + 20) + "em";
      document.getElementById("Gho").style.fontSize = (t + 30) + "em";
      document.getElementById("Ope").style.fontSize = (t + 40) + "em";
      t += 10;
  }
}
addEventListener("click", cambiarTamanio);
//--------------------------------------------------

//-------------------Funciones pagina 4-------------
function crearTabla(){
    var div = document.getElementById("div1");
    var tabla   = document.createElement("table");
    var tblBody = document.createElement("tbody");   
   
    for (var i = 1; i <= 5; i++) {
      var fila = document.createElement("tr");
   
      for (var j = 1; j <= 2; j++) {
        var columna = document.createElement("td");
        var textoCelda = document.createTextNode("fila "+i+", columna "+j);
        columna.appendChild(textoCelda);
        fila.appendChild(columna);
    }
    tblBody.appendChild(fila);
    }   
    tabla.appendChild(tblBody);
    div.appendChild(tabla);
}

function crearAnimacion() {
    var elem = document.getElementById("animacion");   
    var pos = 0, aux=0;
    var id = setInterval(frame, 5);
    function frame() {
      if (aux == 0) { 
        pos++;        
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px";         
      } if((pos == 350)|| (aux!=0)) {        
        elem.style.top = pos + "px"; 
        elem.style.left = pos + "px"; 
        if(pos==0) clearInterval(id)
        aux++;
        pos--;
      }
    }
  }
  //----------------------------------------------