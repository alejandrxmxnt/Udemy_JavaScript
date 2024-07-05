const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
//nombre es la llave o atributo del objeto producto 
//Los nombres de los atributos se deben respetar
const { nombre } = producto;
console.log(nombre);
console.log("------------------------------------------");
//Distructuring con Arreglos.
const numeros = [10,20,30,40,50];
//los nombres de los atributos no interesa ya que 
//llama por posicion este no esta conformado por llaves
//LOS VALORES ESTAN DEFINIDOS POR POSICION
//const [primero, segundo, tercero] = numeros;
//console.log(primero, tercero);

//const [ , ,tercero] = numeros;
//console.log(tercero);

//Sintaxis comun de REACT
const [ , , ...tercero] = numeros;
console.log(tercero);