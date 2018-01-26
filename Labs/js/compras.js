function AbCantidad(){
   var x = document.getElementById("AbCant");
    var y = document.getElementById("AbSli").value;
    x.innerHTML = "Cantidad: " +y +"<br>Monto: $" +y*550 +"<br>Descuento: 10%<br>Total: $" +(y*550)*.9;
}


function PiCantidad(){
   var x = document.getElementById("PiCant");
    var y = document.getElementById("PiSli").value;
    x.innerHTML = "Cantidad: " +y +"<br>Monto: $" +y*120+"<br>Descuento: 20%<br>Total: $" +(y*120)*.8;
}

function ToCantidad(){
   var x = document.getElementById("ToCant");
    var y = document.getElementById("ToSli").value;
    x.innerHTML = "Cantidad: " +y +"<br>Monto: $" +y*1200000+"<br>Descuento: -500%<br>Total: $" +(y*1200000)*5;
}

AbCantidad();
PiCantidad();
ToCantidad();