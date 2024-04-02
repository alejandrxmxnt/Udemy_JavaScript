const producto = 'Monitor 20 Pulgadas';

/**
 * .repetear 
 * Te va permitir repetir una cadena de texto...
 * El repeat te permitira mostrar una cadena de texto multiples veces.
 * 
 * Si a repeat se le pasa un numero que no es entero por ejemplos .repeat(2.4) este lo redondeara a 2 
 */
const texto = ' En promoción'.repeat(3);
//console.log(texto);
console.log(`${producto} ${texto} !!!`);

/**
 * Split, dividir un string
 * 
 * dentro del .split(PARAMETRO) nos pedira un parametro sobre que quiere que se base la busqueda para dividirse
 */

const actividad = 'Estoy aprendiendo JavaScript Moderno';
console.log(actividad.split(" "));

const hobbies = 'Leer, Caminar, Escuchar musica, Escribir, aprender a programar';
console.log(hobbies.split(", "));
