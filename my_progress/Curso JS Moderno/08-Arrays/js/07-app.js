// Supongamos que creamos un carrito de compras desde la consola, más adelante lo haremos ya desde una interfaz web.
const carrito = [];

// Añadir un elemento al carrito...
const producto = {
    nombre: 'Monitor 20 Pulgadas', 
    precio: 400
}

const producto2 = {
    nombre: 'Celular', 
    precio: 800
}

const producto4 = {
    nombre: 'Celular 2', 
    precio: 100
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto4);


// Añadir al Inicio del carrito...

const producto3 =  { 
    nombre: 'Teclado', 
    precio: 50
}
carrito.unshift(producto3); //agrega al primero espacio

// Existen otras formas más modernas de hacerlo... pero esta sintaxis aún se utiliza mucho asi que veamos como hacerlo en el proximo video

//console.table(carrito);

//Eliminar ultimo elemento del arreglo.
//carrito.pop();

//console.table(carrito);
//De eliminar del inicio del carrito...
//carrito.shift();//eliminar el primero del arreglo
//console.table(carrito);

console.table(carrito);
//Eliminar cualquier elemento de enmedio - se le conoce como splice
carrito.splice(1,3);
console.table(carrito);

