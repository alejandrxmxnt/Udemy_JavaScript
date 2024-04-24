const autentificado = true;

//FORMA INCORRECTA
if(autentificado === true){
    console.log("Si puedes ver netflix");
}else{
    console.log("No puedes verlo");
}
//FORMA CORRECTA
if(autentificado){
    console.log("Si puedes ver netflix");
}else{
    console.log("No puedes verlo");
}

//OPERADOR TERNARIO
console.log(autentificado ? 'Si esta autentificado':'No esta autentificado');