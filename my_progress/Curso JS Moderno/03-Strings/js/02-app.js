const producto = 'Monitor 20" Pulgadas';

//Conocer la cantidad de letras de la cadena de texto
console.log(producto.length);
//BUSCAR UN PRODUCTO CON UNA PALABRA RELACIONADA
console.log(producto.indexOf('Pulgadas'));
//OTRA FORMA DE BUSCAR
console.log(producto.includes('20')); 

/**Controla  producto.includes('') lo que este dentro del includes('') o includes("") tenga un valor o algo que tenga parentezco con el valor de producto la concatenacion de producto
                producto.includes('  valora que tenga parentezco con la variable producto  ');
*/

console.log(producto.includes("Moni"));         //TRUE
console.log(producto.includes('Televisor'));    //FALSE