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