//.every
/**
 * Este es un metodo extraño ya que todos los elementos de un arreglo deben de cumplir esa condicion para que nos retorne true
 */

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

const resultado = carrito.every( producto => producto.precio < 1000 );
console.log(resultado);