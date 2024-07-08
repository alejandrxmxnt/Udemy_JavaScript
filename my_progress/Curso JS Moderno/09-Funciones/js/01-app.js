//DECLARACION DE FUNCION (Function Declaration)
/**
 * function     es una palabra reservada
 * NO PUEDES INCIAR DECLARANDO UNA VARIABLE CON NUMERO PRIMERO.
 * ()           Lo que va dentro del parentecis se lo conoce como PARAMETROS DE LA FUNCION
 * {}           Todo lo que este dentro de las llaves se lo conoce como cuerpo de la función
 * 
 * PARA QUE FUNCIONE DEBEMOS LLAMAR A LA FUNCION
 * Para llamarla debemos poner el nombre con el que lo guardamos y seguido los parentesis.
 * Esta puede ser llamada varias veces
 */
function sumar() {
    console.log(2+2);
}

//LLAMAR A LA FUNCIÓN
sumar();

//DECLARACION DE EXPRESION (Function Expression)
/**
 * Esta inicia con una declaracion de variable común es decir " const sumar 2 = " es una forma de declarar variable
 * pero es como definir una variable como función.
 */
const sumar2 = function () {
    console.log(3+3);
}

//LLAMAR FUNCIÓN
sumar2();

