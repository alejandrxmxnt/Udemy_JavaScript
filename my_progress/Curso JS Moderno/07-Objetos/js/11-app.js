const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    mostrarInfo: function () {
        //FORMA CORRECTA
        console.log(`El Producto: ${this.nombre}, tiene un precio de: ${this.precio}`);
    }
}


//FORMA DE LLAMAR LA FUCION
//Cuando la llamamos hacemos el uso de los ()
producto.mostrarInfo();

