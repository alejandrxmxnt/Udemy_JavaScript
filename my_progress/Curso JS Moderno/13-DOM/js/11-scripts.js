/**CREAR UN BOTON QUE DESPLIEGUE UN MENU 
 * 
 * El footer se desplegara mediante un boton
 * El boton va esperar que suceda algo en pantalla a eso se lo conoce como eventos - Se los conoce como eventos por que van a esperar a que algo suceda para aparecer
*/
const btnFlotante = document.querySelector('.btn-flotante'); //un boton // href llama al #footer
const footer = document.querySelector('.footer'); //Lo que se mueve hacia arriba es footer

//Este boton va a esperar a que alguien le de click y va ejecutar un codigo 
//Esto es comodecir que al bonton va esperar la reaccion de algo para que este se ejecute
//El argumento que le vamos a pasar es el evento por el cual vamos a esperar en este caso seria un click - Esta puede ser un funcion declarada o funcion anonima son aquellas que no tienen un nombre pero son declaradas como un arrow function () => {}
//Se conocen como eventos con un metodo llamado addEventListener()
// btnFlotante.addEventListener('click', () => { //este EventListener va a esperar un Click // Esto es como decir botonFlotante vas a esperar a que alguien le de click para que des una reaccion. //Primero pasamos el evento que tiene que suceder para esto usamos 'click' la segunda es como aplicar una funcion pueder ser anonima o como una funcion declarada
//     console.log('Diste click en el botón'); //Esto me confirma si hay confirmacion de funcionamiento
// });//Otra forma de hacer esto es:
btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter() {
    //console.log('Diste click en el botón');
    /**Lo que mueve ese footer de arriba hacia abajo es una clase de CSS
     * Si vamos al CSS en el archivo styles.css y buscamos .btn-flotante.activo ese activo que cambia de color debemos agregar esa clase "activo"
     * .footer.activo activo debemos agregarlo y con bottom: -100%; que lo mueve hacia abajo y cuando esta activo sube bottom:0;
     * dependiendo lo que estemos haciendo a la clase de la etiqueta debemos agregar o quitar
    */
    /**Una forma de verificar si existe una clase es colocando un if */
    //Si tiene la clase activo la quitamos para poder cerrar la ventana
    if(footer.classList.contains('activo')){//class="footer activo" //.contains nos ayudara a verificar si un elemento no tiene una clase
        footer.classList.remove('activo') //quitamos esa clase - class="footer"
        btnFlotante.classList.remove('activo');//Remueve el color
        this.textContent = 'Idioma y Moneda'; //this hace referencia de lo que mando a llamar esa funcion en lugar de escribir boton flotante podemos escribir this 
    } else {
        footer.classList.add('activo'); //class="footer activo"   //agregar la clase de activo al footer //Si damos click en el boton este se activa y sube el footer
        btnFlotante.classList.add('activo'); //Esto lo va cambiar de color
        this.textContent = 'X Cerrar';
    }
    
//
}