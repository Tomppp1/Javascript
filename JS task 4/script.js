"use strict"
let x =prompt("Iveskite pasirinkta sakiciu");

if (x%2===0 || x===0){
    document.write("Numeros yra lyginis");
    console.log("Skaicius yra lyginis");
    document.write(`<br>`+`<p>Skaicius kvadratu ${x*x} <p>`);
    console.log("Skaicius kvadratu"+ x*x );
}else {
    document.write("Skaicius yra nelyginis");
    console.log("Skaicius yra nelyginis");
    document.write(`<br>`+`<p>Skaicius kvadratu ${x*x} <p>`);
    console.log("Skaicius kvadratu"+ x*x );
}

