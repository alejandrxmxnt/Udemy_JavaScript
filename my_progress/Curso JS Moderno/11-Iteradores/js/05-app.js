let i = 0; //INICIO
do {

    //OPERAICON
    if ( ( i % 5 ) === 0 && ( i % 3 ) ===0 ) {
        console.log(`FIZZ BUZZ - ${i}`);
    } else if (( i % 5 ) ===0) {
        console.log(`BUZZ - ${i}`);
    } else if (( i % 3 ) ===0) {
        console.log(`FIZZ - ${i}`);
    }

    i++;    //INCREMENTO
} while( i < 100 );     //CONDICION


