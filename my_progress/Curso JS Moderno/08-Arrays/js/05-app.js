/**
 * AÑADIR NUEVOS ELEMENTOS AL FINAL O INICIO DE UN ARRAY
 */


const meses = ['Enero','Febrero','Marzo'];
//Para añadir nuevos valores al final del arreglo una opcion no convencional pero valida seria esta:
//meses[3] = 'Abril'; //Agregar valor
//console.table(meses); //Imprimir la tabla
meses.push('Abril');
meses.unshift('Año nuevo');
console.table(meses);

/*
const carrito = [];
const producto = {
    nombre: 'Monitor 20 Pulgadas',
    precio: 300
}
const producto2 = {
    nombre: 'Camara Epson',
    precio: 165
}
const producto3 = {
    nombre: 'Memoria USB',
    precio: 55
}

carrito.push(producto);
carrito.push(producto2);
carrito.push(producto3);
console.table(carrito);*/