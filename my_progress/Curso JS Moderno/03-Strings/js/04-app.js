//CORTAR ESPACIOS EN BLANCO DE UN STRING
const producto = '              Monitor 20 Pulgadas               ';
console.log(producto);      //Impresion de variable
console.log(producto.length);       //tamaño cuenta los espacios agregados

console.log(producto.trimStart());      //Para eliminar los espacio en blanco antes de la palabra

console.log(producto.trimEnd());        //Para eliminar los espacios en blanco del final de la palabra

console.log(producto.trimStart().trimEnd());

console.log(producto.trim());