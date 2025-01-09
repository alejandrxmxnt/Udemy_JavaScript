let i = 1;
//FORMA 1 PARA EL FIZZ BUZZ
for ( i ; i <= 100 ; i++) {
    if(i % 3 === 0 && i % 5 !== 0) {
        console.log(`El número: ${i} es FIZZ`);
    }else if (i % 5 === 0 && i % 3 !== 0) {
        console.log(`El número: ${i} es BUZZ`);
    }else if( i % 3 === 0 && i % 5 === 0 ) {
        console.log(`El número: ${i} es FIZZ BUZZ`);
    }
}
//FORMA 2 PARA EL FIZZ BUZZ
for ( let i = 1 ; i <= 100 ; i++ ) {
    if ( ( i % 5 ) === 0 && ( i % 3 ) ===0 ) {
        console.log(`FIZZ BUZZ - ${i}`);
    } else if (( i % 5 ) ===0) {
        console.log(`BUZZ - ${i}`);
    } else if (( i % 3 ) ===0) {
        console.log(`FIZZ - ${i}`);
    }
}

//ORDENANDO EN ARREGLOS
const fizz = [];
const buzz = [];
const fizzBuzz = [];

for ( i ; i <= 100 ; i++ ){
    if(i % 3 === 0 && i % 5 !== 0) {
        fizz.push(`El número: ${i} - FIZZ`);
    }else if (i % 5 === 0 && i % 3 !== 0) {
        buzz.push(`El número: ${i} - BUZZ`);
    }else if( i % 3 === 0 && i % 5 === 0 ) {
        fizzBuzz.push(`El número: ${i} - FIZZ BUZZ`);
    }
}

fizz.forEach( function (f) {
    console.log(f);
} );
console.log("---------------------------");
buzz.forEach( function (b) {
    console.log(b);
} );
console.log("---------------------------");
fizzBuzz.forEach( function (fb) {
    console.log(fb);
} );