/**
 * Otro tema muy immportante cuando estas trabajando con el DOM es que la creacion de HTML desde JavaScript.
 * Cuando publicas un tweet un text are y al a hora de qeu presionas un boton se coloca en lista de todos los tweets
 * 
 * Asi que veamos como creamos esto.
 */

/**
 * Vamos a crear un nuevo enlace
 * 
 * Para crear elementos existe varias formas pero uno de las mas comunes es .createElement(); nos permite crear nuevos elementos de acuerdo a lo que vayas a crear ingresas la etiqueta 
 */
const enlace = document.createElement('A'); //La etiqueta que vamos a utilizar no importa si lo guardamos en mayusculas o minusculas
enlace.textContent = 'Nuevo enlace'; //Darle un nombre
//Para añadir el href
enlace.href = '/nuevo-enlace';
//AGREGAR EL TARGET abrir en nueva pagina
enlace.target = '_blank'; //Podemos ir agregando atributos segun sean necesarios
console.log(enlace);
/**
 * Ahora una vez que ya lo creamos necesitamos mostrarlo para eso escogemos donde vamos a ubicarlo en este caso seria a el nav de navegacion
 * 
 * SELECCIONAR la NAVEGACION
 */


const navegacion = document.querySelector('.navegacion');
//navegacion.appendChild(enlace)         //.appendChild()    hace referencia como agregarle un hijo nuevo a la navegacion


/**
 * Si usamos .appendChild()     este lo agregara al final
 * 
 * Pero si queremos poner en una ubicacion exacta podemos hacer uso de
 * .insertBefore()              este lo agregara en la ubicacion deseada
 * Este necesita de 2 argumentos - cuando se hablan de valores reales ya se hablan de argumentos 
 *              (elemento_Agregar , donde queremos mostrarlo) lo ideas para poner la ubicacion exacta seria adecuado poner o crear una nueva variable
 */
//navegacion.insertBefore()
console.log(navegacion.children); //sabremos los diferentes elementos disponibles y en que lugares

navegacion.insertBefore(enlace, navegacion.children[1]); //Insertar enlace antes de la posicion uno y de esa forma en esta caso este entra en posicion 1

console.log(navegacion.children);
/**
 * .insertBefore()              te dara mas control de donde vas a insertar
 */

//puedes tambien agregar funciones 
enlace.onclick = miFuncion;
function miFuncion(){
    alert('Diste Click');
}

/**  EJERCICIO MAS AMPLIO - CREAR UN CARD   
 * 
 * <div class="card">
        <img src="img/hacer1.jpg">
        <div class="info">
            <p class="categoria concierto">concierto</p>
            <p class="titulo">Música electrónica 2021</p>
            <p class="precio">$1,200 por persona</p>
        </div>
    </div>
 * cada card tiene sus atributos como categoria concierto, titulo, precio, info, img
 * 
*/
////////////////////////////////////////////////////////////////////
//Creamos 3 parrafos - cada parrafo es de una linea 
//Cada parrafo esta dentro de un div llamado info

const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto') //agregar class 


const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de ROCK'
parrafo2.classList.add('titulo');


const parrafo3 = document.createElement('p');
parrafo3.textContent = '800 por persona';
parrafo3.classList.add('precio');

//Crear div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
//El orden de agregar las etiquetas es importante
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//Crear la imagen
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';
imagen.classList.add('img-fluid');
//Crear CARD
const card = document.createElement('div');
card.classList.add('card');
//Asignar la imagen
card.appendChild(imagen);
//Asignar info
card.appendChild(info);

//INSERTAR EN EL HTML
const contenedor = document.querySelector('.hacer .contenedor-cards');
//contenedor.appendChild(card); //con esto lo  estamos agregando al final

//si queremos agregarlo al comienzo o escoger su ubicacion hacemos
contenedor.insertBefore(card, contenedor.children[0]);