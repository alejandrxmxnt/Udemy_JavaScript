const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

producto.disponible = false;
delete producto.precio;
console.log(producto);

/**
 * Los objetos se pueden reasignar pero variables no 
 * const product = NuvoProducto;
 * product = OtroProducto
 * console.log(product)         esto nos genera un error por que con variable constatnte no podemos modificar el valor 
 * 
 * pero si aplicamos esto en objetos no aplica en objetos si se realiza la modificacion pero esto podemos evitar congelando el objeto
*/