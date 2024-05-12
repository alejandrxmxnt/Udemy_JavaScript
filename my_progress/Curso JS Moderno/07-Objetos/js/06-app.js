const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion: {
        medias: {
            peso: '1kg',
            medida: '1m'
        },
        fabricacion: {
            pais: 'China'
        }
    }
}

const { informacion } = producto;

console.log(informacion);

const { nombre, informacion:{medias} } = producto;

console.log(medias);

const { informacion:{fabricacion: {pais}} } = producto;
console.log(pais);

