//Switch case
const metodoPago = 'Efectivo';

switch (metodoPago) {
    case 'Efectivo':
        pagar();
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Cheche':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'Tarjeta':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    default:
        console.log(`Aún no has seleccionado un método de pago o método de pago no soportado`);
        break;
}

function pagar(){
    console.log('Pagando....');
}

