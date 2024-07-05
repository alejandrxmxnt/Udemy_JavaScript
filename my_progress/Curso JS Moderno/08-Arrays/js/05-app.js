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