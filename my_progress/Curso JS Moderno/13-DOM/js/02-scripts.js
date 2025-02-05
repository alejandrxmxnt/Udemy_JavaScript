//Para llamar elementos por su clase
//Como se hacia antes
const header = document.getElementsByClassName('header');
console.log(header);

const hero = document.getElementsByClassName('hero');
console.log(hero);

//Si las clases existen mas de 1 vez
const contenedores = document.getElementsByClassName('contenedor');
console.log(contenedores); //Como resultado me dara todas la clases que contienen el nombre contenedor y las ubicaciones que trae

//Si la clase no existe
const noExiste = document.getElementsByClassName('no-existe');
console.log(noExiste); //Dara como resultado un arreglo vacion que no existe