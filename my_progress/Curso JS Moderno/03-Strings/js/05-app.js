const producto = 'Monitor 20 Pulgadas';
/**
 * Esto .replace es muy util ya que si tubieramos que cambiar un valor para todos los valores de un arreglo o de una 
 * BDD este resulta util por que remplazara la palabra dada por el simbolo o palabra nueva dada.
 */
console.log(producto.replace('Pulgadas', '"'));

console.log(producto.replace('Monitor', 'Monitor Curvo'));

/**
 * .slice para cortar cadena de texto
 * tenemos que pasar los valores desde donde queremos cortar hasta donde sera el corte
 */

console.log(producto.slice(0, 10));
//console.log(producto.slice(2, 1));      //NO DEVUELVE NADA // este no hara nada
/**
 * Alternativa a slice
 */

console.log(producto.substring(0,10));
//console.log(producto.substring(2,1));   //REACOMODA LOS VALORES A (1,2) //este lo modifica y retornara algo