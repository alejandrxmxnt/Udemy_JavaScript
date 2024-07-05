const carrito = [];

//Definir un producto
const producto = {
    nombre: 'Monitor 32 Pulgadas',
    precio: 400
};

const producto2 = {
    nombre: 'Celular',
    precio: 800
}

carrito.push(producto, producto2);//AGREGAR AL FINAL

const producto3 = {
    nombre: 'Teclado',
    precio: 50
}
carrito.unshift(producto3);//AGREGAR AL COMIENZO

console.table(carrito);