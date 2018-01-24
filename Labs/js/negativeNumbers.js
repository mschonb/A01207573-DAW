function negativeNumbers(){
    let n = prompt("Dame el tamaño del array");
    let arr = [];
    let neg = 0;
    let pos = 0;
    let zero = 0;
    
    
    for(let i = 0; i < n; i++){
        arr[i] = prompt("Dame un numero");
        
        if(arr[i] > 0){pos++;}
        else if(arr[i] < 0){neg++;}        
        else if(arr[i] == 0){zero++;}
    }
    
    
    alert("Hay " +neg +" negativos, " +zero +" ceros y " +pos +" positivos");
}

function mAvg(){
    let n = prompt("Dame el numero de renglones");
    let m = prompt("Dame el numero de columnas");
    
    let mat = [[],[]];
    let res = [];
    var aux = 0;
    
    for(let i = 0; i < n; i++){//No entiendo porque deja de funcionar si la matriz es mas grande de 2x2. Siempre se detiene en el [2][0]
        for(let j = 0; j < m; j++){
            mat[i][j] = prompt("Dame el valor "+j +" de el renglon "+i);
            aux += parseInt(mat[i][j]);  
        }
        res[i] = aux/m;
        aux = 0;
           
    }
    
     alert("promedios: ["+res.toString() +"] ");
    
    
}

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

function getNumber(){
    var number = prompt("Dame un numero para generar la tabla");
    return number;
}


function makeTable(number){
    var place = document.getElementById("table");
    var table = document.createElement('table');
    var thead = ["Numero", "Cuadrado", "Cubo"];
    
    table.style.width = '100px';
    table.style.border = '1px black';
    var row = table.insertRow();
    
    
    for(let i = 0; i <3; i++){
        var td = row.insertCell();
        td.appendChild(document.createTextNode(thead[i]));
        td.style.border = "1px solid black";
    }
    
    for(let i = 0; i < (number + 1)/10; i++){
        let tr = table.insertRow();
        let td = tr.insertCell();
        td.appendChild(document.createTextNode(""+i));
        td.style.border = "1px solid black";
        td = tr.insertCell();
        td.appendChild(document.createTextNode(""+i*i));
        td.style.border = "1px solid black";
        td = tr.insertCell();
        td.appendChild(document.createTextNode(""+i*i*i));
        td.style.border = "1px solid black";
    }
    place.appendChild(table);
    
    
    
}


function inverse(){
    let x = prompt("Dame el numero a volver inverso");
    let aux = 0;

    while(x > 0){
        aux *= 10;
        aux += (x%10);
        x = Math.floor(x/10);
    }
    
    alert(""+aux);
    
}