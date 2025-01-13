const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//FORMA TRADICIONAL DE HACER
meses.forEach((mes, i) => {
    if (mes === 'Abril'){
        console.log(`Encontrado en el indice: ${i}`);
    }
});

//FORMA PROFESIONAL DE RESOLVER
const indice = meses.findIndex(mes => mes === 'Abril');
console.log(indice);

//ENCONTRAR UN INDICE EN UN ARREGLO DE OBJETOS
const indice2 = carrito.findIndex(product => product.nombre === 'Celular');
console.log(indice2);