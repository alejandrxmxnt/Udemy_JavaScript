const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
];

//Anteriormente vimos el .findIndex con el cual buscavamos un valor y a la primera que encontraba este se cerraba el cilo pero tambien nos daba el indice del arreglo solo el indice
//Ahora si queremos el valor del objeto podemos hacer eso con el .find()

//con un forEach
let resultado = '';
carrito.forEach((producto, index) => {
    if(producto.nombre === 'Tablet'){
        resultado = carrito[index];
    }
})
console.log(resultado);
//con un .find()
let resultado2 = carrito.find( (producto) => producto.nombre === 'Tablet' );
console.log(resultado2);