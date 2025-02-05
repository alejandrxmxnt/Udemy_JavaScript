/**
 * Modificar Textos o Imagemes con JS
 * 
 * Esto nos permitira hacer el codigo mas atractivo 
 */

/**
 * Primero seleccionamos un argumentos a modificar
 */

const encabezado = document.querySelector('.contenido-hero h1');
console.log(encabezado);

/**
 * console.log(encabezado.innerText); //Te retorna el valor en un solo texto //Si en el CSS - visibility: hidden; no lo va a encontrar
 * console.log(encabezado.textContent); //hace lo mismo pero respeta el espacio que establece span - Este si lo va encontrar
 * console.log(encabezado.innerHTML); //Se trae el texto pero tambien el HTML
 */

const encabezado2 = document.querySelector('.contenido-hero h1').textContent; //se puede aplicar directo en la linea
console.log(encabezado2);

/**
 * Ahora mostrar los cambios en consola no es muy comun por lo cual podemos modificar en ventana y seria asi
 */

document.querySelector('.contenido-hero h1').textContent = 'Nuevo Heading';
//FireFox developer Edition es la edicion especial para desarrolladores en la cual si queremos ver opciones de los metodos que podemos hacer en js ahi nos saldran

/**
 * Modificar imagen en js
 */

const imagen = document.querySelector('.card img');
//console.log(imagen); //Si vemos en la consola de firefox developer edition nos mostrara mas opciones
//A todas las operaciones o metodos que conocemos simpre accederemos por src

imagen.src = 'img/hacer2.jpg'