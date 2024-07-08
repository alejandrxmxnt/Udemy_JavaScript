//Supongamos el desarrollo de una app de musica
const reproductor = { //Creacion de un objeto llamado "reproductor"
    //"reproducir" es una propiedad del objeto "reproductor"
    reproducir: function(id) { //creacion de un function expression 
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log(`Pausando....`);
    },
    borrar: function(id) {
        console.log(`Borrando Canción.... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la Playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre) {
        console.log(`Reproduciendo la Playlist ${nombre}`);
    }

}
//A ESTE TIPO DE ESTRUCTURA SE LO CONOCE COMO METODO DE PROPIEDAD
reproductor.reproducir(30);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('San Juan');
reproductor.crearPlaylist('Rock 90s');
reproductor.reproducirPlaylist('Rock 90s');
/**
 * Se le puede ir agregando mas propiedades
 */

