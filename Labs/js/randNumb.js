function randNumbers(){
    let x = Math.floor(Math.random() * Math.floor(150));
    let y = Math.floor(Math.random() * Math.floor(150));

   var ans = prompt("Dame el resultado de la suma de los siguientes numeros  "+x +" + " +y);
    
    if(ans == (x+y)){
        alert("Correcto");
    }else{
        alert("Incorrecto");
    }
    //document.write(""+d);
}

randNumbers();