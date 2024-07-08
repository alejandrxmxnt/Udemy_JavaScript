//Función que retorna valores
/**
 * Este no los imprime nos devuelve un valor y ese valor puede ser asignado en una variable
 * La viariable que resibirar ese valor debe contar con un nombre como esta en el ejemplo.
 */
function sumar ( a , b) {
    return a+b;
}

const resultado = sumar(2,3);

console.log(resultado);

//EJEMPLO MAS AVANZADA
let total = 0;
function agregarCarrito(precio){
    return total +=precio;
}
function calcularImpuesto(total){
    return total * 1.15;
}

total = agregarCarrito(300);
total = agregarCarrito(100);
total = agregarCarrito(600);

const totalPagar = calcularImpuesto(total);

console.log(`El total a pagar mas impuesto es de: ${totalPagar}`);
console.log(`El total a pagar sin impuesto es de: ${total}`);

