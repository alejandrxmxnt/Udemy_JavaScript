//UNDEFINED
let numero;
console.log(numero);    //imprime undefined
console.log(typeof numero);     //imprime undefined

//NULL
let numero2 = null;
console.log(numero2);           //imprime null
console.log(typeof numero2);    //imprime object

//SI COMAPAMOS ESTOS VALORES DE FORMA NO ESTRICTA
console.log(numero == numero2);     //imprime true
//No es correcto

//SI COMPARO ESTE VALOR DE FORMA ESTRICTA
console.log(numero === numero2);    //imprime false
//por que uno es valor no definido(undefined) y el 
//otro es object un valor nulo (null).

