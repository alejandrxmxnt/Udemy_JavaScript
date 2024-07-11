const usuario = false;
const puedePagar = true;

if(usuario && puedePagar){ //si es usario y puede pagar
    console.log(`Si puedes Comprar.`);
}else if(!usuario && !puedePagar){ //usuario y pagos no son validos
    console.log(`No no puedes comprar`);
}else if(!usuario){//no puede pagar
    console.log(`Inicia sesión o saca una cuenta`);
}else if(!puedePagar){
    console.log(`Fondos Insuficientes`);
}

