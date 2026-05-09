//OBJETOS DENTRO DE OTROS OBJETOS
const producto = {
    nombre: "Monitor 20 Pulgadas",
    precio: 300,
    disponible: true,
    informacion : {
        peso : '1kg',
        medida : '1m'
    }
}

const persona = {
    datosPersonales: {
        primerNombre: 'Adrian',
        segundoNombre: 'Alejandro',
        fechaNacimiento: '12/12/12'
    },
    informacion: {
        edad: 20,
        nacionalidad: 'Argentina'
    },
    estado: 'Soltero',
    more: {
        peso: '55kg',
        medida: '162cm',
        foot: {
            calzado: 40
        }
    }
}

console.log(persona);


console.log(persona.informacion);
console.log(persona.more.foot.calzado);


//console.log(producto.informacion.medida);



const vehiculo = {
    nombre: "For raptor",
    precio: 15000,
    disponible: true,
    informacion : {
        color: "Azul",
        gama: "media/alta",
        anio: 2026
    },
    componentes: {
        rueda:{
            oficial: 16.5,
            repuesto:16.0
        },
        bodykit: false
    }
}

console.log(vehiculo)