//De esta forma vemos a que le estamos dando click
//Esto se conoce como Delegation por que solo creamos un document.querySelector()

const cardDiv = document.querySelector('.card');
cardDiv.addEventListener('click', e => {
    //console.log(e.target);
    if(e.target.classList.contains('titulo')){
        console.log('Diste ckick en titulo');
    }
    if(e.target.classList.contains('precio')){
        console.log('Diste ckick en precio');
    }
    if(e.target.classList.contains('card')){
        console.log('Diste ckick en card');
    }
})

/**Con target vemos a que dimos click y lo que esta asociado a este */