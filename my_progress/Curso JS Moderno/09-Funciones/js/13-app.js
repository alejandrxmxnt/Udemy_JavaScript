
const reproductor = { 
    cancion: '',
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log(`Pausando....`),
    borrar: id => console.log(`Borrando Canción.... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la Playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la Playlist ${nombre}`),

    //EL this. sirve para buscar dentro del objeto
    set nuevaCancion(cancion){ //SET es una forma para agregar valores
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCacion() {//Es una forma de obtener esos valores
        console.log(`${this.cancion}`);
    } 
}

reproductor.nuevaCancion = 'Enter Sandman';
reproductor.obtenerCacion;

//A ESTE TIPO DE ESTRUCTURA SE LO CONOCE COMO METODO DE PROPIEDAD
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('San Juan');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');



