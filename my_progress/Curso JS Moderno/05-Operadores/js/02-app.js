const numero1 = 20;
const numero2 = "20";
const numero3 = 30;

//Revisar si los numeros son iguales
console.log(numero1 == numero3);        //false
console.log(numero1 == numero2);        //true

//Comparador Estricto
console.log(numero1 === numero2);        //false
console.log(typeof numero1);
console.log(typeof numero2);

//convertir el string a numero y comparar si son iguales
console.log(numero1 === parseInt(numero2));     //true

//Diferente
const password1 = "admin";
const password2 = "Admin";

//como podemos revisar si estos passwords son diferentes uno de otro
console.log(password1 != password2);    //true      Porque los passwords son dintintos
console.log(numero1 != numero2);        //false     Porque los resultados son iguales
console.log(numero1 !== numero2);       //true      porque el tipo de dato es distinto

//Si lo convierto el numero2 a number este mandara de resultado por que ya en tipo de
//dato sera igual y en valor igual
console.log(numero1 !== parseInt(numero2));     //false




