"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.seal( producto );

//producto.disponible = false;      //MODIFICAR ATRIBUTO DEL OBJECT
//producto.imagen = "imagen.jpg";   //AGREGAR NUEVO ATRIBUTO AL OBJECT
//delete producto.precio;           //ELIMINAR ATRIBUTO DEL OBJETC

console.log(producto);

console.log(Object.isSealed(producto));



/**
 * Seal sella el objeto lo que hace que nada entre nada se elimine y nada se modifique es mas estricto
 * 
 * Tambien podemos saber si este objeto esta sellado con el siguiente metodo
 * console.log(Object.isSeal(producto)))            cabe mencionar que producto es la variable que estemos controlando
 */