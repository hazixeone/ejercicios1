let A, B;
let der, izq, arr, aba;
let derechaabajo, derechaarriba, izquierdaabajo, izquierdaarriba;
let arribaderecha, arribaizquierda, abajoderecha, abajoizquierda; 

A = parseInt(prompt("localizacion en A"));
B = parseInt(prompt("loclizacion en B"));

if (A + 2 <= 8){ //zonaderecha
    der = A + 2;
    if(B + 1 <= 8){
        derechaarriba = B + 1;
        console.log("ubicacion:", der,",",derechaarriba);
    }
    if(B - 1 > 0){
        derechaabajo = B - 1;
        console.log("ubicacion:", der,",",derechaabajo);
    }
}
if (A - 2 > 0){ //zonaizquierda
    izquierda = A - 2;
    if(B + 1 <= 8){
       izquierdaarriba = B + 1;
       console.log("ubicacion:", izq,",",izquierdaarriba);
    }
    if(B - 1 > 0){
        izquierdaabajo = B - 1;
        console.log("ubicacion:", izq,",",izquierdaabajo);
    }
}
if (B + 2 <= 8){ //zonaarriba
    arr = B + 2;
    if(x + 1 <= 8){
        arribaderecha = A + 1;
        console.log("ubicacion:", arribaderecha,",",arr);
    }
    if(A - 1 > 0){
        arribaizquierda = A - 1;
        console.log("ubicacion:", arribaizquierda,",",arr);
    }
}
if (B - 2 > 0){ //zonaabajo
    aba = B - 2;
    if(A + 1 <= 8){
       abajoderecha = A + 1;
       console.log("ubicacion:", abajoderecha,",",aba);
    }
    if(A - 1 > 0){
        abajoizquierda = A - 1;
        console.log("ubicacion:", abajoizquierda,",",aba);
    }
} console.log