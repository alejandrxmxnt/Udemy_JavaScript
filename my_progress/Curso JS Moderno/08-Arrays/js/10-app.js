const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}

];


console.log("-------------------------------------");
const nuevoArreglo = carrito.map(function(producto) {
    //La iteacion se hara sobre producto ya no carrito
    return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
});

const nuevoArreglo2 = carrito.forEach(function(producto) {
    //La iteacion se hara sobre producto ya no carrito
    return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
});

console.log("----------------MAP---------------------");
console.log(nuevoArreglo);
console.log("-----------------FOREACH--------------------");
console.log(nuevoArreglo2);//este no tendra nada "undefined"