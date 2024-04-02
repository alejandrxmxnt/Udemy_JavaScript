const producto = 'Monitor 20 Pulgadas';
const precio = '30 USD ';

console.log(producto.concat(precio));       //CONCATENACION CON METHODS
console.log(producto.concat('En descuento'));       //OTRA FORMA DE CONCATENAR

console.log(producto + ' Con precio de: ' + precio);        //OTRA FORMA DE CONCATENAR

console.log('El producto ' + producto + 'tiene un precio de: ' + precio);       //FORMA 1 DE CONCATENAR
console.log('El producto ' , producto , 'tiene un precio de: ' , precio);       //FORMA 2 DE CONCATENAR

console.log(`El producto ${producto} tiene un precio de $ ${precio}`);
//Las variables son agregadas con esta sintaxis ${VARIABLE}
