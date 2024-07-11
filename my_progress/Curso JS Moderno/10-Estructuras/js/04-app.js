const dinero = 100;
const totalApagar = 500;
const tarjeta = false;
const cheque = false;

//Mayor igual que
if (dinero >= totalApagar){
    console.log(`Si podemos pagar`);
}else if(cheque){
    console.log(`Si tengo un cheque`);
}else if(tarjeta){
    console.log(`Si puede pagar por tengo la tarjeta`);
}else{
    console.log(`Fondos Insuficientes.`);
}

