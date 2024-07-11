
const puntaje = 1000;
//COMPARACION DE IGUALDAD == compara el resutado pero no el tipo de valor
if (puntaje == 1000){
    console.log(`Si es igual`);
}else {
    console.log(`No son iguales`);
}
//COPARACIÓN DE IGUALDAD === compara el resultado y el tipo de valor
if (puntaje === 1000){
    console.log(`Si es igual y es numero`);
}else {
    console.log(`No son iguales, uno es numero y el otro es cadena`);
}
//COMPARACIÓN DE DIFERENCIA != compara que no sean iguales
if (puntaje != 1000){ //!= solo verifica que el numero sea diferente no verifica el tipo de valor
    console.log(`Si son diferentes`);
}else {
    console.log(`Son iguales`);
}
//COMPARACIÓN DE DIFERENCIA ESTRICTA !== compara que que no sean iguales tanto valor como tipo de valor
if (puntaje !== 1000){
    console.log(`Son Diferentes`);
}else {
    console.log(`Son Iguales tanto en valor como tipo de valor`);
}

