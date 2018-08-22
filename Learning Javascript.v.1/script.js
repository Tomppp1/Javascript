"use strict"
// const a ="tom";
// const b ="aug";

// const show = prompt("Iveskite norima teksta");

// if (show ===a || show===b){
//     console.log("true");
// }else if( show ===b){
//     console.log("true");
// }else{
//     console.log("false");
// }

//console.log("Hello world");
//alert ("Hello world");




//   Task 1
// let a=1;
// let b=4;
//    // confirm ("heello");
//     console.log(a+b);
//     console.log(a-b);
//     console.log(a*b);
//     console.log(a/b);


//     document.write(
//         "<p>sgiuiu</p>"
//     )

//    ***Issoktu 2 skirtingi popup juose sudeti, atimti ir padaro liekana, ir i daciment write iraso ju value    ===

// let pimrasSkaicius= prompt("Iveskite pirkma skaiciu");
// let antrasSkaicius= prompt("Iveskite antra skaiciu");

// let first= Number(pimrasSkaicius);
// let second= Number(antrasSkaicius);

// const sudetis= first+second;
// const atimtis= first-second;
// const liekana= first % second; 
// document.write(
//     `<p>${sudetis}<p>
//     <p>${atimtis}<p>
//     <p>${liekana}</p>
//     `
// );
// console.log(liekana);

//  ****  ismeta promta ivesti salies pavadinima, atspausdintu ar teisingai ivesta salis ar ne
// let saliesPavadinima= prompt("Iveskit salies pavadinima Lietuva");
// let a= saliesPavadinima;
// const atsakymas="lietuva"
// document.write (
//     `<p>${saliesPavadinima}</p>
//     `
// )
// if(a.toLowerCase() === atsakymas){
//     console.log("ivesta teisingai")
// }else {
//     console.log("ivesta klaidingai");
// }



//2 promtai iveskite varda (admnin), iveskite slaptazodi(master) ir jeigu userio nama ir slaptazodis atitinka alertinti sekminga kitu atveju klaidingai 
// let vartotojoVarda =prompt("iveskite vrtotojo varda");
// let vartotojoSlaptazodis =prompt("iveskite slaptazoi");
// if (vartotojoVarda ==="admin" &&vartotojoSlaptazodis ==="master"){
//     alert("prisijungta");
// }else{
//     alert("klaidingai");
// }

// let saliesPavadinimas =prompt("Pasirinkite viena is duotu saliu:Lietuva, Graikija, Lenkija, Visas");
// let lietuvosPlotis =("Lietuvos plotis yra 10003km.");
// let lietuvosGyventojai =("Lietuvos gyventoju skaicius 32mln");
// let graikijosPlotis =("Graikijos plotis yra45322km.");
// let graikijojeGyvena =("Graikijos gyventoju skaicius 55mln");
// let lenkijosPlotis =("Lenkijos plotis yra 235235km.");
// let lenkijojeGyvena =("Lenkijoje gyventoju skaicius 11mln");
// if (saliesPavadinimas.toLowerCase()==="lietuva"){
//     document.write(lietuvosPlotis+lietuvosGyventojai);
// }else if (saliesPavadinimas.toLowerCase()==="graikija"){
//     document.write(graikijosPlotis+graikijojeGyvena)
// }else if(saliesPavadinimas.toLowerCase()=== "lenkija"){
//     document.write (lenkijojeGyvena+ lenkijosPlotis);
// }else if (saliesPavadinimas.toLowerCase()==="visas"){
//     document.write(lietuvosPlotis+lietuvosGyventojai+graikijojeGyvena+graikijosPlotis+lenkijojeGyvena+lenkijosPlotis);
// }else {
//     alert("Klaidingai ivestas salies pavadinimas");
// }







//
// let saliesPavadinimas =prompt("Pasirinkite salies pavadinima: Lietuva, Latvija, Graikija, Visos.");
// const tekstas={
//     gyventojai : "Salyhje gyvena   :",
//     plotas : "Salies plotas yra  :",
//     plotasGyventojui: "Plotas tenkantis vienas gyventojui yra :"
// };const milijonas =1000000 ;
// const ltuGyvSkaicius =2800738;
// const ltuPlotas =65286;
// let ltuGyvPlotas =(ltuPlotas/ ltuGyvSkaicius)*milijonas;
// const lenGyvSkaicius =38563573;
// const lenPlotas =312679;
// let lenkGyvPlotas =(lenPlotas/ lenGyvSkaicius)*milijonas;
// const graikGyvSkaicius =10737428;
// const graikPlotas =131957;
// let graikGyvPlotas =(graikPlotas/graikGyvSkaicius)*milijonas;
// if (saliesPavadinimas.toLowerCase()==="lietuva"){
//     document.write(`<h2>Lietuva</h2>` + tekstas.gyventojai + ltuGyvSkaicius +`<br>` + tekstas.plotas + ltuPlotas +`<br>` + tekstas.plotasGyventojui + ltuGyvPlotas)
// }else if(saliesPavadinimas.toLowerCase()=== "lenkija"){
//     document.write(`<h2>Lenkija</h2>` + tekstas.gyventojai + lenGyvSkaicius +`<br>` + tekstas.plotas + lenPlotas +`<br>` + tekstas.plotasGyventojui + lenkGyvPlotas)
// }else if(saliesPavadinimas.toLowerCase()=== "graikija"){
//     document.write(`<h2>Graikija</h2>`+tekstas.gyventojai + graikGyvSkaicius +`<br>` + tekstas.plotas + graikPlotas +`<br>` + tekstas.plotasGyventojui + graikGyvPlotas)
// }else if(saliesPavadinimas.toLowerCase()==="visos"){
//     document.write("nezinau kaip ideti visus isvardijusius auksciau")
// }else{
//     alert("Bandykite dar karta")
// // };









//////
// let saliesPavadinimas =prompt("Pasirinkite salies pavadinima:Lietuva, Lenkija, Graikija,visos");
// const milijonas =1000000 ;
// const ltuGyvSkaicius =2800738;
// const ltuPlotas =65286;
// let ltuGyvPlotas =(ltuPlotas/ ltuGyvSkaicius)*milijonas;
// const lenGyvSkaicius =38563573;
// const lenPlotas =312679;
// let lenkGyvPlotas =(lenPlotas/ lenGyvSkaicius)*milijonas;
// const graikGyvSkaicius =10737428;
// const graikPlotas =131957;
// let graikGyvPlotas =(graikPlotas/graikGyvSkaicius)*milijonas;
// if (saliesPavadinimas.toLowerCase()==="lietuva"){
//     document.write(
//         `<p>Salis: Lietuva, joje gyvena ${(ltuGyvPlotas)} zmones.</p>
//         <p>Jos plotis yra${(ltuPlotas)} km.</p>
//         <p>Plotas tenkantis vienam gyventojui:${ltuGyvPlotas.toFixed(2)}m <sup>2</sup></p>`);
// }else if(saliesPavadinimas.toLowerCase()==="lenkija"){
//     document.write(
//         `
//         <p>Salis: Lenkija, joje gyvena ${(lenGyvSkaicius)} zmones.</p>
//         <p>Jos plotis yra ${(lenPlotas)}km.</p>
//         <p>Plotas tenkamas vienam gyventojui: ${lenkGyvPlotas.toFixed(2)}m <sup>2</sup> </p>
//         `)
// }else if(saliesPavadinimas.toLowerCase()==="graikija"){
//     document.write(
//         `<p>Salis: Graikjia, joje gyvena ${(graikGyvSkaicius)} zmones.</p>
//         <p>Jos plotis yra ${(graikPlotas)}km.</p>
//         <p>Plotas tenkamas vienam gyventojui: ${graikGyvPlotas.toFixed(2)}m <sup>2</sup> </p>
//         `)
// }else if(saliesPavadinimas.toLowerCase()==="visos"){
//     document.write(
//         `<p>Salis: Lietuva, joje gyvena ${(ltuGyvPlotas)} zmones.</p>
//         <p>Jos plotis yra${(ltuPlotas)} km.</p>
//         <p>Plotas tenkantis vienam gyventojui:${ltuGyvPlotas.toFixed(2)}m <sup>2</sup></p>
//         <p>Salis: Lenkija, joje gyvena ${(lenGyvSkaicius)} zmones.</p>
//         <p>Jos plotis yra ${(lenPlotas)}km.</p>
//         <p>Plotas tenkamas vienam gyventojui: ${lenkGyvPlotas.toFixed(2)}m <sup>2</sup> </p>
//         <p>Salis: Graikjia, joje gyvena ${(graikGyvSkaicius)} zmones.</p>
//         <p>Jos plotis yra ${(graikPlotas)}km.</p>
//         <p>Plotas tenkamas vienam gyventojui: ${graikGyvPlotas.toFixed(2)}m <sup>2</sup> </p>
//         `
//     )
// }else alert("Salis nerasta");






let prekesKaina= prompt("Iveskite prekes kaina");
let pristatymas= prompt("Ar reikalingas pristatymas i namus? Taip/Ne ");
let miestoPavadinimas= prompt("Iveskite miesto pavadinima");
const kaina={
    kainaPrekes : "Prekes kaina: ",
    kainaDaugiau : "Preke bus pristat i Jusu miesta nemokamai per 3 darbo dienas",
    kainaMaziau  :"Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a",
    
};if (prekesKaina.valueOf() < 50){
    document.write(kaina.kainaPrekes + prekesKaina+` €`)
}else if (pristatymas.toLowerCase()==="ne");{
    document.write(`<br>` + kaina.kainaMaziau)  
}else if (prekesKaina.valueOf() < 50)
}else if (pristatymas.toLowerCase()==="taip"||"ne" ){
}else if(miestoPavadinimas.toLowerCase()==="vilnius"){
    document.write(kaina.kainaPrekes+ prekesKaina+`<br>`+ kaina.kainaDaugiau)
};
 
