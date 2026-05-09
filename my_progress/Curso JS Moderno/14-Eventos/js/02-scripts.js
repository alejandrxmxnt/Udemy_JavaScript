/**EVENTOS CON EL MOUSE 
 * 
 * Evento que sucedera en el menu pero haciendo uso del mouse
 * TODOS LOS EVENTOS USAN .addEventListener()
*/

const nav = document.querySelector('.navegacion');
// nav.addEventListener('click', () => { //click es el evento mas comun que se usa pero existen tambien otros
//     console.log('Click en nav');
// });

//Evento cuando se aleje del menu el mouse
nav.addEventListener('mouseout', () => {
    console.log('Saliendo de la navegación');

    nav.style.backgroundColor = 'transparent';
});

//Evento cuando pase el mouse cerca de la casilla seleccionada este se actice
nav.addEventListener('mouseenter', () => {
    console.log('Entraste a la navegación');
    nav.style.backgroundColor = 'white';
});

//Actual igual que un click
nav.addEventListener('mousedown', () => {
    console.log('Entraste a la navegación');
    nav.style.backgroundColor = 'white';
});

//ES IGUAL QUE EL EVENTO CLICK
nav.addEventListener('mouseup', () => {
    console.log('Entraste a la navegación');
    nav.style.backgroundColor = 'white';
});

//Cliquear 2 veces a ese evento se lo conoce como
nav.addEventListener('dblclick', () => {
    console.log('Entraste a la navegación');
    nav.style.backgroundColor = 'white';
});

/**
 * mousedown = Similar al click
 * click = es click
 * dblclick = doble click
 * mouseup = cuando sueltas el mouse
 */
