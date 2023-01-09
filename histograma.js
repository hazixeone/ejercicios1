let Datoingresado
let contadorpositivos
let contadorNegativos

do{
      Datoingresado=prompt ("ingresa valor positivo o negativo, termina con 0") 
     console.log(Datoingresado)         
     if(Datoingresado > 0){
        contadorpositivos++;
    
     }else if(Datoingresado<0){
        contadorNegativos++;
     }

}while(Datoingresado !=0)
console.log("positivos");
for (let i=0;i>contadorpositivos;i++){
    console.log ("#")
}

console.log("negativos");
for (let i=0;i>contadorNegativos;i++){
    console.log ("#")
}