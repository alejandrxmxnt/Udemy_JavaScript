let elemento;

elemento = document; //Document   =>    selecciona todo el documento html
elemento = document.all;  //document.all   =>    te proyecta en consola todas las etiquetas que se usaron para esa interfaz - Tambien en la parte de abajo indica cuantas etiquetas se uso en total son 168 que 99 son de head y lo demas es de body
elemento = document.head; //document.head   =>   te proyecta solo parte del head
elemento = document.body; //document.body   =>   te proyecta solo la parte del body
elemento = document.domain; //document.domain => te dira en que dominio esta trabajando en este caso 127.0.0.1
elemento = document.forms; //document.forms  =>  te proyecta cuantos formularios existen en la pagina en este caso 1 tambien te pasa los atributos que tiene en formado htmlCollection
//Para ver mas detalle este formulario puedes hacer uso de arreglos ya que esta restructurado como arreglo
elemento = document.forms[0]; //Nos muestra la estructura del formulario
elemento = document.forms[0].id; //Nos proyecta con que nombre esta guardando los id o identificadores - en este caso se llama formulario
elemento = document.forms[0].method; // Tambien puedo ver ele mentodo en este caso POST
elemento = document.forms[0].classList; //Nos da las clases que tiene se mentodo
elemento = document.forms[0].action; //La accion que esta haciendo
elemento = document.links;  // Nos da todos los enlaces que tiene este documento 
elemento = document.links[4]; //Nos manda el enlace de la posicion 4 del documento 
elemento = document.links[4].classList;  //Me retorna las clases que tiene ese enlace - ademas te los retorna por categoria o arreglos 
elemento = document.links[4].className;  //Teretorna las clases pero en texto plano
//imagenes
elemento = document.images; //Nos indica la cantidad de imagenes que se tiene
elemento = document.scripts; //Nos permite ver la cantidad scripts que se tienen en el archivo


console.log(elemento);