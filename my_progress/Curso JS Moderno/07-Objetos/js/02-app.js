const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

console.log(producto.nombre);       //imprime "Monitor 20 Pulgadas"
console.log(producto.precio);       //imprime 300
console.log(producto.disponible);   //imprime true

//console.log(`Nombre del producto: ${producto.nombre} y su precio es de ${producto.precio}`);

//FORMA RARA PERO QUE AVECES ENCUENTRAS

console.log(producto['nombre']);

