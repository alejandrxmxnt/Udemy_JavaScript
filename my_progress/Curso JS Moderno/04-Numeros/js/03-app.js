/**
 * Si escribimos Math en la consola de google veremos un monton de objetos que podemos hacer esos son 
 * funciones de las que podemos realizar desde aqui algunas se usan muy poco a diferencia de otras dependera
 * el proyeto.
 */

let resultado;
//PI
resultado = Math.PI;
//Redondear
resultado = Math.round(2.8);  //redondea del 0.0 al 0.4 para abajo y del 0.5 al 0.9 para arriba

//Redondeo hacia arriba es decir del 0.1 al 0.9 lo lo redondeara al mayor
resultado = Math.ceil(2.1);     //imprimira 3

//Redondeo hacia abajo es decir lo contrario a Math.ceil()
resultado = Math.floor(2.9);  //imprimira 2

//Raiz cuadrada   ---- poco usado
resultado = Math.sqrt(144);  //te pasara la raiz cuadrada de este valor

//Valor absoluto
resultado = Math.abs(-500);  //imprimira el 500 omite el valor negativo

//Potencia
resultado = Math.pow(2, 4);  //imprimira 16     2x2x2x2 = 16

//Minimo
resultado = Math.min(3,5,1);  //imprimira el valor minimo

//Maximo
resultado = Math.max(3,5,1);  //imprimira el valor maximo del conjunto

//Aleatorio
resultado = Math.random();      //Poco usado imprime valores aleatorios que pocas veces da valores enteros a menos que lo acompañes
resultado = Math.floor(Math.random() * 30);  //asi podemos generar un valor aleatorio que va del 1 al 30


console.log(resultado);