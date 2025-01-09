const reproductor = {
    nombre: '',
    nuevaCancion: nombre => console.log(`Canción Nueva registrada: ${nombre}`),
    obtenerCacion: () => console.log(`Canción Actual: ${reproductor.nuevaCancion.nombre}`),
    reproducir: id => console.log(`Reproduccion la canción con el id de: ${id}`),
    pausar: () => console.log(`Pausando...`),
    borrar: id => console.log(`Borrando la cancion con el id de: ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist de: ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist de: ${nombre}`)
}



function IniciarApp(){

    let add;
    let opcion = prompt(`1. AGREGAR CACIÓN \n2. OBTENER CACIÓN`);
    let resultado='';

    if (parseInt(opcion) === 1){
        add = prompt(`Ingrese nombre de la cación`);
        resultado = reproductor.nuevaCancion(add);
    }else{
        reproductor.obtenerCacion;
    }
}
IniciarApp();

//A ESTE TIPO DE ESTRUCTURA SE LO CONOCE COMO METODO DE PROPIEDAD
/*
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('San Juan');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');*/
