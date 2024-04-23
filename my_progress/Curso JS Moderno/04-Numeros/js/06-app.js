//Convertir STRING A NUMEROS

const numero1 = "20"; //typeof string
const numero2 = "20.2"; //typeof string
const numero3 = "Uno";  //typeof string
const numero4 = 20;  //typeof number

//Para pasar de string a valor numerico debemos usar la funcion de NUMBER seguido de una funcion reservada

console.log(typeof Number.parseInt(numero1));       //con esto verifico que se halla converitido a number
console.log(Number.parseInt(numero1));      //El parseInt lo que hace es convertir de string a number entero

//Si el valor tiene decimales se usa el parseFloat

console.log(typeof Number.parseFloat(numero2));
console.log(Number.parseFloat(numero2));

//Si hacemos el numero3 este me dara como resultado NaN

//Revisar si el numero es entero
console.log(Number.isInteger(numero4));     //esto me indicara true por que 20 es un valor entero
//SON FUNCIONES QUE TE VAN A PERMITIR VER SI SON NUMEROS PARA CONVERTIR
