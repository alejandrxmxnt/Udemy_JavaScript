//FORMA 1
const aprendiendo = function (tecnologia, tecnologia2) {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo('JavaScript', 'Node.js');

const aprendiendo1 = function (tecnologia, tecnologia2 = 'Vue.js') {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}
aprendiendo1('JavaScript');

//FORMA 2 - ARROW FUNCTION
const aprendiendo2 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}`;

console.log(aprendiendo2('JavaScript', 'Node.js'));

const aprendiendo21 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2 = 'Python'}`;

console.log(aprendiendo21('JavaScript'));

//FORMA 3 - ARROW FUNCTION MAS RESUMIDO
const aprendiendo3 = tecnologia => `Aprendiendo ${tecnologia}`;

console.log(aprendiendo3('JavaScript'));


