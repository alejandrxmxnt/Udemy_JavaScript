/**
 * Va create un arreglo basado en el parametro que es evaluado.
 */
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];
/**
 * Filter te permite hacer muchas operaciones en tus arreglos por ejemplo cuando usabamos findIndex()
 * Buscavamos un valor y este a la primera que encuentra moria el arreglo y ya no buscaba mas pues aqui el 
 * filter() es mas abierto a eso.
 */

//Si queremos traernos todos los productos que cuesten mas de 400 en nuestro carrito 
let resultado = carrito.filter( (producto) => producto.precio >= 400 );
console.log(resultado);
//No funciona porque debe tener si existira productos con la letra T pero no puede buscar por una letra debe ser
//caracter completo
//let resultado2 = carrito.filter( producto => producto.nombre === 'T');
//console.log(resultado2);

/**
 * Esto se ve mas aplicado cuando haces la busqueda de precio o cantidad de dormitorios en un hotel algo asi.
 */
//Para imprimir todos los objetos que sean menor a 600
resultado = carrito.filter( (producto) => producto.precio < 600 );
//Agarrar una lista de los objetos omitiendo articulos esto es muy eficiente cuando queremos ver ciertos productos y otros no // nos imprime todo menos los valores que ordenamos que en este caso es audifonos
resultado = carrito.filter( producto => producto.nombre !== 'Audifonos');
//O si queremos que nos salga solo una categoria podria ser.
//Nos imprime solo la categoria solicitada
resultado = carrito.filter( producto => producto.nombre === 'Audifonos');

console.log(resultado);