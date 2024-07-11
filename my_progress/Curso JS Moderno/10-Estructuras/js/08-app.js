const autentificado = true;

if (autentificado) {
    console.log('El usuario esta autentificado.');
}

const puntaje = 500;
//El usar el return hace que se cumple 1 y se sale de la funcion
//ESTA ESTRUCTURA NO ES MUY COMÚN EN EL DIA A DIA
//if(puntaje > 400){
//    console.log('Excelente!!!');
//    //return; //NO SE PUEDE USAR return EN ESTRUCTRUA IF ELSE
//}else if(puntaje > 300){
//    console.log('Buen puntaje... felicidades');
//    //return; //NO SE PUEDE USAR return EN ESTRUCTRUA IF ELSE
//}
console.log('---------------------');
//ESTRUCTURA MAS COMÚN EN EL DIA A DIA
function revisarPuntaje(){
    if(puntaje > 400){
        console.log('Excelente!!!');
        return;
    }

    if(puntaje > 300){
        console.log('Buen puntaje... felicidades');
        return;
    }
}

revisarPuntaje();

