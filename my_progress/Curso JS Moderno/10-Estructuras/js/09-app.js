const autentificado = true;
const puedePagar = false;
//console.log( autentificado || puedePagar ? 'Si esta autentificado' : 'No no esta autentificado' );
//TERNARIO ANIDADO:
console.log( autentificado ? puedePagar ? 'Si esta autentificado y puede pagar' : 'Si esta autentificado, no puede pagar' : 'No no esta autentificado' );