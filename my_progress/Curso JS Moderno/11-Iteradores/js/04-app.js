//WHILE LOOP
//No todo se declara en el mismo lugar como en FOR
let i = 1; //INICIALIZAR WHILE

//CONDICIÓN
while (i < 100) {
    //OPERAICON
    if ( ( i % 5 ) === 0 && ( i % 3 ) ===0 ) {
        console.log(`FIZZ BUZZ - ${i}`);
    } else if (( i % 5 ) ===0) {
        console.log(`BUZZ - ${i}`);
    } else if (( i % 3 ) ===0) {
        console.log(`FIZZ - ${i}`);
    }

    i++; //INCREMENTO
}

