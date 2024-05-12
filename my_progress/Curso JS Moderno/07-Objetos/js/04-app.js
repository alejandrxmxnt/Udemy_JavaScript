const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//ASIGNAR A UNA VARIABLE EL VALOR DEL OBJETO
//const nombre = producto.nombre;
//console.log(nombre);

/**
 * Gracias a la aparicion de ecma script tenemos algo que se llama
 * object destructuring es decir extraer del objeto y crear la variable
 * todo en un paso.
 */
const { nombre, precio, disponible } = producto;
console.log(nombre,' - ',precio,' - ',disponible);

