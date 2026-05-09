"use strict";

const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

Object.freeze( producto );

//producto.disponible = false;
//producto.imagen = "imagen.jpg"
//delete producto.precio;

console.log(producto);

console.log(Object.isFrozen( producto ));

/**
 * Si ponemos           use strict          este se congele es decir que al crearlo como constate este aplique las reglas de const
 * 
 * esto es como algo stricto como cuando hacemos las comparaciones de uso estricto === pero para objetos esto seria con             use strict
 * 
 * 
 * y esto tiene sus object methods que ese es su nombre como tal pero haciendo uso de 
 * Object.freeze ( producto );          este congela por completo el objetos no entra ni se cambian datos
 * 
 * 
 * Y para para saber si el objeto esta congelado podemos verlo con el siguiente metodo
 * 
 * console.log(Object.isFrozen(producto));
 * 
 *  */