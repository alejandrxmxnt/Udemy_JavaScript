window.addEventListener('scroll', () => {
    //console.log('scrolling');
    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    if(ubicacion.top < 784){
        console.log('El elemento ya esta visible.');
    }else{
        console.log('Aun no, da mas escroll');
    }
})

/**dada una distancia podemos dar la orden de activar una estructura que tenga otro color sea diferente como activar un gif */