function mouseOver(){
    document.getElementById("mouseO").innerHTML = "<strong> Cambia el estilo de las letras de alguna parte del documento con eventos diferentes a onClic.</strong><br> Pasa el mouse sobre cualquier parte de este texto o sobre la pregunta</p>";
}


function mouseOff(){
    document.getElementById("mouseO").innerHTML = "<strong>Pasa el mouse sobre mi</strong>";
}


function ayudaMatricula(){
    document.getElementById("question").innerHTML = "ingresa tu matricula del tec";
}

var tiempo;
document.onmousemove = function(){
  clearTimeout(tiempo);
  tiempo = setTimeout(function(){alert("Haz algo hombre :/");}, 1000000);
}