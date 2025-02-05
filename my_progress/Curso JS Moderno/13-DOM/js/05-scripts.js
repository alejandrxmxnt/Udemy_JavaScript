//querySelectorAll()        Te retorna todos los elementos es lo mismo que querySelector pero este te pasa todos.

/**
 * La sintaxis de los selectores es la misma de querySelector()
 * 
 * querySelectorAll( )          va retornarte todos los elementos que cumplan las condiciones del selector
 */

const card = document.querySelectorAll('.card');  //Si ya existe esta clase varias veces traera todas las clases o id que tengan este nombre

/**
 * Tener un archivo h1 con el id formulario y luego la etiqueta formulario con el id formulario eso es de muy malas practicas pero si hacemos
 */

const formularios = document.querySelectorAll('#formulario');
console.log(formularios);//Como resultado esto no nos dira que es incorrecto es un fallo de hecho lo en lista en NodeList() y este nos indicara en que etiquetas esta ese nombre de id

/**
 * Si un elemento no existe
 */

const noExiste = document.querySelectorAll('.noExiste');
console.log(noExiste); //Como resultado nos dara un NodeList() vacio