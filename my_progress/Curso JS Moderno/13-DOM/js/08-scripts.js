//RECORRER EL DOM
/**
 * En JavaScript todo esta conectado al document.
 * Pero en la forma que te vas a mover por los diferentes elementos se le conoce como Traversing de DOM
 * Es decir que se hace un recorrido como si fuera un mapa algo mas aplicado a la realidad seria decir como si fueras turista en una ciudad que no conoces y vas recorriendo sobre los lugares que son interesantes
 */

/**
 * Vamos a tomar lo que esta en el nav de html
 *          <nav class="navegacion">
                <a href="#">Vender</a>
                <a href="#">Ayuda</a>
                <a href="#">Registro</a>
                <a href="#">Iniciar Sesión</a>
            </nav>

 * en JavaScript los enlaces son conocidos como nodos

 */

// const navegacion = document.querySelector('.navegacion');

// console.log(navegacion);

// console.log(navegacion.childNodes); //para poder acceder a ellos podemos hacer //Los espacios en blanco son conciderados elementos
/**
 * Resultado que nos proporciona
 * NodeList(9) [text, a, text, a, text, a, text, a, text] 0 : text 1 : a 2 : text 3 : a 4 : text 5 : a 6 : text 7 : a 8 : text length : 9 [[Prototype]] : NodeList
 * 
 * ese text que sale es por el espacio que se tiene de cada etiqueta si los ponemos como <a></a><a></a> Asi seguidos ese text no existiria
 * 
 * Para evitar este problema con los text podemos implimentar .children
 * este va en listar elementos que si sean reales
 */

// console.log(navegacion.children); //HTMLCollection(4) [a, a, a, a] //Con una sintaxis de arreglos podemos acceder a cada enlace

// console.log(navegacion.children[0]);  //<a href="#">Vender</a>

// console.log(navegacion.children[0].nodeName);  //seria el nombre de la etiqueta
// console.log(navegacion.children[0].nodeType);  //Seria hacer una busqueda por type en la documentacion de Firefox que es la mejor de JavaScript donde nos indica que el tipo 1 es un nodo de tipo de elemento  - https://developer.mozilla.org/es/docs/Web/API/Node/nodeType

//PONER .children nos elistara los esquemas hijos de ese Elemento

const card = document.querySelector('.card');

console.log(card); /**Nos imprime el card 
<div class="card">
    <img src="img/hacer1.jpg">
    <div class="info">
        <p class="categoria concierto">concierto</p>
        <p class="titulo">Música electrónica 2021</p>
        <p class="precio">$1,200 por persona</p>
    </div>
</div>
*/

console.log(card.children); /**Nos va enlistar los elementos que sean hijos de la etiqueta card 
HTMLCollection { 0: img, 1: div.info
, length: 2 }
​
0: <img src="img/hacer1.jpg">​
1: <div class="info">
​
length: 2


Supongamos que queremos acceder a la info
*/
console.log(card.children[1]); /**
<div class="info">
    <p class="categoria concierto">concierto</p>
    <p class="titulo">Música electrónica 2021</p>
    <p class="precio">$1,200 por persona</p>
</div>

Ahora para imprimir los hijos de ese info
*/

console.log(card.children[1].children); /**
HTMLCollection { 0: p.categoria.concierto, 1: p.titulo, 2: p.precio, length: 3 }


Ahora si quiero entrara una posicion de se hijo del hijo
*/

console.log(card.children[1].children[1]); /**
<p class="titulo">Música electrónica 2021</p>

Si solo quieres visualizar el texto
*/
console.log(card.children[1].children[1].textContent); /**
Música electrónica 2021

Ahora que eto imlemente un cambio en el DOM
*/

card.children[1].children[1].textContent = 'Nuevo Heading Desde Traversing The DOM'


/**
 * Para cambiar la imagen con traversing en DOM
 */
card.children[0].src = 'img/hacer3.jpg'
console.log(card.children[0]);

//TRAVERSING DE DOM DE HIJO A PADRE

console.log(card.parentNode); /**
<div class="contenedor-cards">
<div class="card">
    <img src="img/hacer1.jpg">
    <div class="info">
        <p class="categoria concierto">concierto</p>
        <p class="titulo">Música electrónica 2021</p>
        <p class="precio">$1,200 por persona</p>
    </div>
</div>

Este considera los espacios en blanco
seria mejor usar 

.parentElement      Se va verificar por elementos validos en el HTML si abrimos la consola puedes ver que el resultado es es mismo pero es una forma mas segura

Puedes agregar cuantos quieras de parentElement siempre y cuando este tenga un padre
*/

//PARA VER EL PRIMER CARD LO PUEDO HACER ESCRIBIENDO ESTO
/**
 * .nextElementSibling      te va permitir seleccionar el siguiente del siguiente card por que hacemos esto esto puede aplicarse cuando se tiene una estructura como esta en el HTML
 * 
<div class="contenedor-cards">
    <div class="card">
        <img src="img/hacer1.jpg">
        <div class="info">
            <p class="categoria concierto">concierto</p>
            <p class="titulo">Música electrónica 2021</p>
            <p class="precio">$1,200 por persona</p>
        </div>
    </div> <!--.card-->
    <div class="card">
        <img src="img/hacer2.jpg">
        <div class="info">
            <p class="categoria concierto">concierto</p>
            <p class="titulo">Rock en Los Ángeles</p>
            <p class="precio">$300 por persona</p>
        </div>
    </div> <!--.card-->
    <div class="card">
        <img src="img/hacer3.jpg">
        <div class="info">
            <p class="categoria clase">Clase Cocina</p>
            <p class="titulo">Comida Española para Principiantes</p>
            <p class="precio">$400 por persona</p>
        </div>
    </div> <!--.card-->
    <div class="card">
        <img src="img/hacer4.jpg">
        <div class="info">
            <p class="categoria paseo">Paseo en Bici</p>
            <p class="titulo">Paseo en las Montañas</p>
            <p class="precio">$200 por persona</p>
        </div>
    </div> <!--.card-->
</div>

Si te das cuenta los grupos estan clasificados con el mismo nombre
 */
console.log(card);
//SI QUIERO IR AL SEGUNDO CARD 
console.log(card.nextElementSibling); 
//SI QUIERO IR AL TERCER CARD
console.log(card.nextElementSibling.nextElementSibling); 

/**
 * PARA IR AL ULTIMO CARD EN LUGAR DE HACER VARIOS .nextElementSibling
 */

const ultimoCard = document.querySelector('.card:nth-child(4)'); //Si recordamos el nth hace que se enumeren los elementos hijos de card child hace referencia a hijo y el numero en parentesis hace referencia a cual nos difigimos
console.log(ultimoCard);

/**
 * Para ir del ultimo al penultimo podemos hacer 
 */

console.log(ultimoCard.previousElementSibling); //Que en lugar de ir al ultimo ira al penultimo

//VOLVIENDO AL NAV IGUAL PODEMOS VER LOS ELEMENTOS DE NAVEGACION PERO DE ESTA FORMA

const navegacion = document.querySelector('.navegacion');
console.log(navegacion.firstElementChild); //Nos mostrara el primer elemento del nav
console.log(navegacion.lastElementChild);  //Nos mostrara el ultimo elemento del nav
