/**EVENTOS SOBRE LOS IMPUTS - eventos que suceden en el teclado 
 * 
 * Es decir cuando yo escribo en un formulario que lo voy llenando, podemos tener funciones o codigo que se ejecuten
 * Uno muy común es por ejemplo en Twitter cuando vas escribiendo te va apareciendo un contador o te va diciendo
 * cuántas palabras llevas escritas o tambien muchos sitios web te van entregando validación
 * 
 * Si colocas un Email dicen "no valido"
*/

const busqueda = document.querySelector('.busqueda'); //tabajaremos en el buscador
// busqueda.addEventListener('keyup', () => { //keydown se ejecuta cuando pulsas una tecla
//     console.log('Escribiendo...');
// });

/**
 * keydown          se ejecuta cuando pulsas una tecla
 * keyup            se ejecuta cuando sultas la tecla
 * blur             es para validaciones cuando sales del input este te manda el mensaje / Cuando sales del input te notiica
 * copy             detecta si copiaste el texto que escribiste
 * paste            detecta si pegaste un texto
 * cut              detecta si cortaste el texto
 * input            se ejecuta cuando estas escribiendo, cuando sueltas, cuando cortas, cuando pegas, cuando realizar cualquiera de los eventos que realizamos anteriormente menos la tarea del blur
 */

/**
 * Lo ideal de hacer con estos eventos seria saber que es lo que esta escribiendo el usuario para poderlo enviar digamos a una consulta a una base de datos, a un web Service obtener algun resultado o simplemente validar, saber que esta escribiendo el usuario
busqueda.addEventListener('input', (evt) => {      * evt o event o Event o e    cualquiera cosa hace referencia al evento que esta sucediendo
    console.log(evt); //imprime lo que sucede
});
 * 
 * 
 */
//PARA SABER QUE ESTA ESCRIBIENDO EL USUARIO HACEMOS 
busqueda.addEventListener('input', (evt) => {
    console.log(evt.target.value); //imprime lo que sucede //si yo pongo un type me dira que tipo de elemento es
    /**
     * evt                      nos imprime lo que pasa en pantalla
     * evt      .type           nos imprime el tipo de elemento que es
     * evt      .target         nos escribe la etiqueta o la ubicacion los atributos que tiene esa etiqueta
     * evt      .target.value   si quieres saber que esta escribiendo
    */
});

//PARA HACERLO MAS INTERESANTE PODEMOS APLICAR UNA VALIDACION SIMPLE
busqueda.addEventListener('input', (e) => { /**Una forma de controlar que un input cuente con validacion / esto se usa bastante */
    if(e.target.value === ''){
        console.log('campo vacio');
    }else {
        console.log(e.target.value);
    }
})