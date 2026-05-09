//LLAMAR A LA FUNCIÓN
sumar();
//DECLARACION DE FUNCION (Function Declaration)
function sumar() {
    console.log(2+2);
}
//------------------------------------------------------------
//LLAMAR FUNCIÓN
sumar2();
//DECLARACION DE EXPRESION (Function Expression)
const sumar2 = function () {
    console.log(3+3);
}

/**
 * La diferencia entre estas 2
 * Es posible utilizar una funcion antes de definirla o Crees que sea posible utilizar una funcion antes de escribir esa?
 * No podemos ejecutar sumar2 antes de ejecutar la funcion y esto pasa a que cuando se lanza la operacion el codigo lee el archivo primero y luego responde es por eso que en el primer caso este da uan respuesta por que creo el archivo pero en cambio en la declaracion de expresion no encuentra la funcion ya que solo lo encuentra como una vairable definida
 */

