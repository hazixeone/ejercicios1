let A=prompt("ingresar numero de digitos")
let B=1
let Numbase=prompt("ingrese numero a comparar")

do{
const a= Array(A).fill(prompt("digitos"))
console.log(a);B++
if(a<=Numbase){
    console.log(a+ "es menor que"+ Numbase)
}else if(a>Numbase){
    console.log(a+ "es mayor que"+ Numbase)
}
} while(B<=A)

