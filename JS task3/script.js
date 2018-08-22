
"use strict";

// const kaina = prompt ("Įveskite prękės kainą");
// const pristatymas = prompt ("Ar reikalingas pristatymas į namus? (taip arba ne)");

// if(pristatymas.toLowerCase() === "ne"){
//     document.write(`
//     <p>Prekės kaina: ${kaina} €</p>
//     <p>Prekes galite atsiimti nemokamai Vilniuje, adresu Gedimino pr. 1a</p>
//     `);
// } else {
//     const miestas = prompt("Į kurį miestą reikės pristatyti prekes?"); 

//     if(kaina >= 50){
//         document.write(`
//         <p>Prekės kaina: ${kaina} €</p>
//         <p>Prekę nemokamai pristatysime į ${miestas} per 1-3 dienas.
//         `);
//     } else if(kaina < 50 && miestas.toLowerCase() === 'vilnius'){
//         document.write(`
//         <p>Prekės kaina: ${kaina} €</p>
//         <p>Prekę nemokamai pristatysime į Vilnių per 1-3 dienas.
//         `);
//     } else {
//         document.write(`
//         <p>Prekės kaina: ${kaina} €</p>
//         <p>Pristatymas: 20 €</p>
//         <p>Iš viso: ${Number(kaina) + 20} €</p>
//         <p>Prekes pristatysime į ${miestas} per 1-3 dienas.<p>
//         `);
//     }
// }
let i=0;
for (i; i<=100; i++){
if (i%1===0 && i%5===0){
    document.write(`<p>FizzBuzz</p>`)
}else if (i%3===0){
    document.write(`<p>Fizz</p>`)
}else if (i%5===0){
    document.write(`<p>Buzz</p>`)
}else{
    document.write(i);
}
}
// let i = 1;
// for (i; i<=100; i++){
// 	if (i%3===0 && i%5===0){
// 		document.write('FizzBuzz')
// 	}else if (i%3===0){
// 		document.write("Fizz")
// 	}else if (i%5===0){
// 		document.write("Buzz")
// 	}else{
// 		document.write(i);
// 	}
// }