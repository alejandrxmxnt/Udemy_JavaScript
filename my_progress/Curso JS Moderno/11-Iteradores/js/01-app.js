//For loop
for( let i = 0 ; i <= 10 ; i++ ){
    console.log(`Numero: ${i}`);
}

//¿EN UN FOR LOOP COMO IDENTIFICAS QUE LOS NUMEROS SEAN PARES Y LOS QUE SON NONES?
for ( let i = 0 ; i <= 20 ; i++ ){
    if((i % 2) === 0){
        console.log(`El numero ${i} es PAR.`);
    }else{
        console.log(`El numero ${i} es IMPAR.`);
    }
}

//EJEMPLO CON UN ARRAY

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500},
    { nombre: 'Televisión', precio: 100},
    { nombre: 'Tablet', precio: 200},
    { nombre: 'Audifonos', precio: 300},
    { nombre: 'Teclado', precio: 400},
    { nombre: 'Celular', precio: 700}

];

for (let i = 0 ; i < carrito.length ; i++) {
    console.log(carrito[i]);
}

