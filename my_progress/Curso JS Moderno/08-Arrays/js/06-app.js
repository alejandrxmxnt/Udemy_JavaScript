/**
 * Agregar elementos pero sin hacer uso de los metodos .push() or .unshift()
 * Agregar elementos haciendo el uso del Spread Operator
 */

const carrito = [];
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
};
const producto2 = {
    nombre: 'Celular',
    precio: 800
}
const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
let resultado;
resultado = [...carrito, producto]; //Hace una copia del arreglo y pasa el objeto
resultado = [...resultado, producto2]; //Carga el arreglo otra copia
resultado = [producto3, ...resultado]; //El objeto se carga primero y luego se cargan los otros valores

console.table(resultado);//se imprime con la variable de resultado ya no con el nombre del arreglo.

