
let prekesKaina= prompt("Iveskite prekes kaina");
let pristatymas= prompt("Ar reikalingas pristatymas i namus? Taip/Ne ");
let miestoPavadinimas= prompt("Iveskite miesto pavadinima");
const kaina={
    kainaPrekes : "Prekes kaina: ",
    kainaDaugiau : "Preke bus pristat i Jusu miesta nemokamai per 3 darbo dienas",
    kainaMaziau  :"Preke galite atsiimti nemokamai Vilniuje adresu Gedimino pr. 1a",
 };
// if (prekesKaina.valueOf() < 50){
//     document.write(kaina.kainaPrekes + prekesKaina +` €`+` <br>` + kaina.kainaMaziau)
// }else if (prekesKaina.valueOf() >50){
//     document.write(kaina.kainaPrekes + prekesKaina+ `€`+`<br>`+ kaina.kainaDaugiau)
if (prekesKaina.valueOf() < 50){
    document.write("kaina mazesne todel siuntimo nebus")
    }else if{
        document.write("kaina didesene todel siuntimas nemokamas")
    }else if (pristatymas.toLowerCase()==="taip"){
    document.write("something")
}


    // const siuntimasReikalingas = prompt('asdasdasdasdsa');
    // if(siuntimasReikalingas === taip){
    // do something
    // } else {
    // do something
    // }

