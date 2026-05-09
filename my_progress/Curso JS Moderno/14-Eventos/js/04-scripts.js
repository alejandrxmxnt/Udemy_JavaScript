/**EVENTO SUBMIT EN FORMULARIO 
 * 
 * ya que el submit se da en el formulario este se ejucutara llamando a formulario
*/

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', (e) => { //Submit es el evento que mas se utiliza en los formularios //input o button que tiene el type submit manejan esto este evento
    e.preventDefault();

    console.log(e); /**Si presiono en el boton y le doy a buscar este nos retorna en consola todo lo que esta sucediendo es decir todo lo que tenemos en este evento */
});