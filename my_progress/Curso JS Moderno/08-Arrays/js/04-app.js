const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio'];

//Agregar nuevos valores a un array:
/**
 * Para eso llamanos a la posicion al que vamos a agregar un nuevo valor o sustituir
 */

meses[0] = 'New month'; //esto sustituria el valor de Enero a "New month"
meses[4] = 'other month';

meses[10] = 'ultimo mes';

console.table(meses);

