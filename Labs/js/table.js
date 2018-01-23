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
