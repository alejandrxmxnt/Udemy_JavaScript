/**
 * Los terminos id solo pueden ser nombrados 1 sola vez por documento y para llamar al id actualmente se hace esto
 * getElementById('__VALOR_A_RECUPERAR__')
 * si existiera 2 archivos con el mismo id al primero en detectar el id este se lo aplicara a ese directamente.
 * En caso de que el id no existira este directamente nos retornara un valor de null que es nulo no sera un arreglo como tal pero sera un valor nulo.
 * 
 */
const formulario = document.getElementById('formulario'); 
console.log(formulario);

/**
 * esta tampoco es la mas usada actualmente pero se usa 
 * la mas usada es la de queryselector que tiene una sintaxis similar a la de css
 */