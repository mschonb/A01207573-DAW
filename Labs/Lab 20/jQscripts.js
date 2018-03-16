var x = [];
x = [0,0,0,0,0,0,0,0,0,0];
var MAX_INT = 9;
var currentIndex = 9;
var fullNumbers = 0;

$(document).ready(function(){
    $("#for").click(function(){
        addNum();
    });

    $("#restart").click(function(){
        restart();
    });
});


document.getElementById("num").innerHTML = printArray(x);

function addNum(){
    var i = 0;
    if(x[currentIndex] < MAX_INT){
        x[currentIndex]++;
    }
    if(x[currentIndex] >= MAX_INT){
        while(x[currentIndex] >= MAX_INT){
            currentIndex--;
            i++;
            console.log(currentIndex);
        }
        x[currentIndex]++;

        while (currentIndex < MAX_INT){
            currentIndex++;
            x[currentIndex] = 0;
        }
    }
    document.getElementById("num").innerHTML = printArray(x);
}

function restart(){
    x = [0,0,0,0,0,0,0,0,0,0];
    document.getElementById("num").innerHTML = printArray(x);
}

function printArray(array) {
    var string = "";
    for (var i = 0; array.length > i; i++) {
        string += array[i];
        if(i == 2 || i == 5){
            string+= "-"
        }
    }
    return string;

}