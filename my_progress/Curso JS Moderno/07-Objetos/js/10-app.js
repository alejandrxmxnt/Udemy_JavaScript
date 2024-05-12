//PRIMER OBJETO
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true
}
//SEGUNDO OBJETO
const medias = {
    peso: '1Kg',
    medida: '1m'
}
//TERCER OBJETO
const info = {
    pais: 'China',
    anio: 2001,
    disponible: false
}

//FORMA 1 - USO DEL Object.assign(OBJETOS1, OBJETO2)
const resultado = Object.assign(producto, medias, info);
console.log(resultado);

//FORMA 2 - USO DEL SPREAD OPERATOR O REST OPERATOR
const resultado2 = { ...producto, ...medias, ...info }
console.log(resultado2);

