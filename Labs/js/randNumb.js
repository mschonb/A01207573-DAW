function randNumbers(){
    let timeS = new Date();
    let x = Math.floor(Math.random() * Math.floor(150));
    let y = Math.floor(Math.random() * Math.floor(150));

   var ans = prompt("Dame el resultado de la suma de los siguientes numeros  "+x +" + " +y);
    
    let timeE = new Date;
    let totalTime = timeE - timeS;
    if(ans == (x+y)){
        alert("Correcto tu tiempo total fue de: " +totalTime / 1000 +"s" );
    }else{
        alert("Incorrecto tu tiempo total fue de: " +totalTime / 1000 +"s");
    }
    //document.write(""+d);
}

