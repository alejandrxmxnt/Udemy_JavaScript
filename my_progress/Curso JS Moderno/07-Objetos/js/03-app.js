const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//Agregar nuevos valores
producto.imagen = "Imagen.jpg"

console.log(producto);

//ELIMINAR propiedades del objeto
delete producto.disponible;

console.log(producto);

