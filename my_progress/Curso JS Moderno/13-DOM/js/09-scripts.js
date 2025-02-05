/** JavaScript es un lenguaje que te permite agregar interacciones a tus sitios y a tus aplicaciones web 
 * 
 * ELIMINAR ELEMENTOS DEL DOM
*/

/**
 * Cuando publicamos algo y luego lo quitamos estamos quitando elementos
 * 
 * Podemos elimiar elementos por si mismo y la otra es eliminarlo desde el padre
 */

//ESTO ES ELIMINAR UN ELEMENTO POR SI MISMO CON .remove()
//const primerEnlace = document.querySelector('a');
//console.log(primerEnlace);

//primerEnlace.remove(); //Lo va a eliminar del DOM 


//EXISTE LA FORMA QUE HACE REFERENCIA DESDE EL PADRE, ES DECIR QUE EL PADRE ES EL QUE SE ENCARGA DE ELIMINAR AL HIJO

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);

navegacion.removeChild(navegacion.children[2]);  //Tenemos que pasarle dentro los parentesis el nodo que deseas eliminar

