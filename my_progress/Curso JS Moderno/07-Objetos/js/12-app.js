//OBJECT LITERAL
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}

//OBJECT CONSTRUCTOR
function Producto (nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
}

const resultado = new Producto ('Tablet Xiaomi', 550);

console.log(resultado);
