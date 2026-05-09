/**Problemas que se presentan en los eventos - estos se los conoce como Event Bubbling esto hace referencia cuando
 * pulsas en un evento pero este se propaga por muchos otros lugares dando resultados que no son los esperados
El evento Bubbling es como propagarse en lugar de ejecutar lo que es ira a un evento padre o hijo si es que tiene relacion
Un ejemplo del bubbling seria hacer esto:
*/

const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');

cardDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en card.');
})
infoDiv.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('click en info.');
})
titulo.addEventListener('click', (e) => {
    e.stopPropagation();        //esto evita que suceda el event bubbling que es la propagacion de un evento 
    console.log('click en título.');
})