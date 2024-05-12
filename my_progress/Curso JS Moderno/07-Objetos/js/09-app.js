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

