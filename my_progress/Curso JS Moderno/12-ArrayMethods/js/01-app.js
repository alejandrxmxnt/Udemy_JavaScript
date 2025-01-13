const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//COMPROBAR SI UN VALOR EXISTE EN UN ARREGLO

meses.forEach( (mes) => {
    console.log(mes);
});
//BUSCAR UN VALOR DENTRO EL ARREGLO SI EXISTE
meses.forEach( (mes) => {
    if ( mes === 'Enero' ){
        console.log('Enero si existe');
    }
});

/**
 * En el codigo anterior es correcto el codigo pero hay una forma mas profesional atra vez de array methods para resolver esto.
 */

//PARA ARREGLOS
const resultado = meses.includes('Enero');
console.log(resultado);

//PARA ARREGLO DE OBJETOS
const existe = carrito.some( (producto) => {
    return producto.nombre === 'Celular';
});
console.log(existe);

console.log("--------------------------");
const existe2 = carrito.map(function(product){
    if(product.nombre === 'Celular'){
        console.log(true);
    }
});
