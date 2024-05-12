const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
//te pasa en un array las llaves del objeto
console.log(Object.keys(producto));
//te pasa en un array los valores de las llaves del objeto
console.log(Object.values(producto));
//te pasa en un array tanto las llaves como valores mas aparenta como una matriz
console.log(Object.entries(producto));
