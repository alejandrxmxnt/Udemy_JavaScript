//CONOCIDO COMO ARREGLO PLANO
//const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];
//CONOCIDO COMO ARREGLO
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}

];
//IMPRIMIR LOS VALORES DEL ARREGLO
for( let i = 0; i < carrito.length; i++ ) {
    console.log(`Producto: ${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}

//Foreach es una funcion se podria decir.
//Donde carrito hace referencia a todo el arreglo mas objetos
//y la palabra producto que puede ser llamada como queramos es
//el que responde por cada uno de los elementos
carrito.forEach(function(producto) {
    //La iteacion se hara sobre producto ya no carrito
    console.log(`Producto: ${producto.nombre} - Precio: ${producto.precio}`);
});
