let digitos = parseInt(prompt("datos a ingresar:"));
var datos = new Array(digitos);

for(var i = 0; i < datos.length; i++){
        let dato = parseFloat(prompt("Dato:"));
        datos[i] = dato;       
        console.log("dato"+i+":",datos[i]);
}
var promedio = 0;

for(i = 0; i <= datos.length; i++){
    if(datos[i] >= 6){
        promedio++;
    }
}
console.log(promedio,"numeros son mayor al promedio")