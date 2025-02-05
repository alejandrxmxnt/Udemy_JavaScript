/**
 * queryselector actual similar a getElementById es decir te va retornar maximo un elemento pero tiene la caracteriztica
 * que te permite selecionar incluso clases es uan sintaxis muy similar a la de hoja de estilos cuando estas escribiendo
 * selectores en CSS 
 * Te va retornar maximo un elemento pero tiene la caracteristica que te permitira selecionar clases o id
 * queryselector te va retornar el primero que encuentre (si le diste una clase a buscar pero varios tienen esa clase al primero que encuentre a ese aplicara.)
 */
const card = document.querySelector('.card');  //Si ya existe esta clase varias veces tomara del primero y con ese trabajara / tambien es necesario poner . si es class o #si es de id
console.log(card);


//PODEMOS TENER SELECTORES ESPECIFICOS
const info = document.querySelector(".premium .info"); //Para tener selectores especificos como en CSS es necesario poner el espacio si se trata de una clase hijo 
/**
 * DIFERENCIAS A COMPRENDER
 * document.querySelector(".premium .info"); //esto hace referencia que info es una clase hijo de premium
 * document.querySelector(".premium.info");  //Si estuvieran asi esto serian 2 clases de una sola etiqueta 
 */
/**
 * <div class="contenedor-cards premium">
                <div class="info">
                    <h3>Una nueva sección de alojamientos de lujo</h3>
                    <a href="#" class="boton btn-mi-viaje">Explorar alojamientos </a>
                </div>
            </div> <!--.columnas4 cuadros-->
 */
console.log(info);


//SELECCIONAR EL SEGUNDO CARD DE HOSPEDAJE
const segundoCard= document.querySelector('section.hospedaje .card:nth-child(2)')
/**
 * <section class="hospedaje"> de aqui sale section qeu es la etiqueta y el .hospedaje es de la clase .card es el contenedor por asi decirse y :nth-child(2) es como enumeras los card y asi identificas cual es cual
            <h2>Hospedaje</h2>
            <div class="contenedor-cards">
                    <div class="card">
                        <img src="img/hospedaje1.jpg">
                        <div class="info">
                            <p class="categoria hospedaje">Casa completa - 2 camas</p>
                            <p class="titulo">Casa completa con todos los servicios y 2 recamaras</p>
                            <p class="precio">$3,200 por noche</p>
                        </div>
                    </div>
 */
console.log(segundoCard);

/**
 * document.getElementsByClassName() //Solo selecciona clases
 * document.getElementById() //Solo selecciona id
 * document.querySelector() //Te permite seleccionar tambien ids con la misma sintaxis de CSS 
 */

/**
 * <div class="contenido-hero contenedor">
            <h1>Encuentra <span> hospedaje  </span>para tus próximas vacaciones</h1> <!-- id="formulario" -->

            <!--Panel de busqueda-->
            <form action="/buscador" method="POST" class="formulario formulario-buscar" id="formulario" >
                <input type="text" name="busqueda" class="busqueda" placeholder="New York, Londres, Roma, Guadalajara">
                <input type="submit" value="Buscar" id="btn-submit">
            </form>
        </div>

* Como seleccionarimos este formulario con querySelector()
 */

const formulario = document.querySelector('#formulario');
console.log(formulario);

//OTRA FORMA MAS ESPECIFICA
const formulario2 = document.querySelector('.contenido-hero #formulario');
console.log(formulario);

//SELECCIONAR ELEMENTOS HTML
const navegacion = document.querySelector('nav');
console.log(navegacion);