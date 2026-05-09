/**Eventos en .addEventListener() dentro el parentesis es el evento que vamos a escuchar
 * Cuando visitamos un sitio web estas estan formadas de varios eventos
 * Cuando damos me gusta en alguna red social este esta pasando por un evento
 * 
 * LOS SIGUIENTES EVENTOS QUE VEREMOS USAREMOS addEventListener()
 * Dentro el parentesis va el evento por el cual vamos a escuchar
*/
// document.addEventListener('');      //Si hacemos control + space este nos mostrara los eventos que podemos hacer
document.addEventListener('DOMContentLoaded', () => { //DOMContentLoaded es un evento que descarga el HTML el CSS las imagenes los scripts todo para poder ejecutar sin fallo
    console.log('Documento listo');
});