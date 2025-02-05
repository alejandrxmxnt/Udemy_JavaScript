/**
 * Podemos agregar o modificar las clases pero tambien es posible modificar el css 
 */

/**
 * Aveces cuando llenamos un formulario y no cumplimos los campos este nos manda una alerta de inmediato por lo cual eso esta llamando a una clase en js que ejecula la alerta
 *  
 * 
 * Veamos como cambiar el color del encabezado 
 */

const encabezado = document.querySelector('h1');

console.log(encabezado.style); //Si llamamos a este metodo podremos desplegar la cosas que podemos hacer con ese texto

encabezado.style.backgroundColor = 'red';
encabezado.style.color = 'blue';
//La diferencia entre css y desarrollar desde javascript es que en lugar de escribir background-color en javascript est backgroundColor sin guiones sin puntos solo la primera letra pasa a ser en mayuscula

encabezado.style.fontFamily = 'Arial';    //Cambiar fuente
encabezado.style.textTransform = 'uppercase'; //cambia a todo mayuscula

/**
 * Para ver que clases tiene un elemento
 */

const card = document.querySelector('.card');
console.log(card.classList); //Nos va retornar las clases que se tienen 

//Como agregar clases
card.classList.add('nueva-clase');
console.log(card.classList);

//Remover o eliminar una clase

card.classList.remove('card');
console.log(card.classList);