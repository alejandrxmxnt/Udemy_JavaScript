const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}

];

//FORMA 1 CON MAP Y ARROW FUNCTIONS
//const nuevoArreglo = carrito.map( (producto) => {
//    return `Producto: ${producto.nombre} - Precio: ${producto.precio}`;
//});
//FORMA 2 CON MAP Y ARROW FUNCTIONS MAS CORTO
const nuevoArray = carrito.map( producto => `Producto: ${producto.nombre} - Precio: ${producto.precio}`);


//FORMA 1 CON ARROW FUNCTIONS Y FOREACH
//La iteacion se hara sobre producto ya no carrito
//carrito.forEach( (producto) => {
//console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
//});
//FORMA 2 CON ARROW FUNCTIONS Y FOREACH MAS CORTO
carrito.forEach( producto => console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`));


console.log(nuevoArray);

