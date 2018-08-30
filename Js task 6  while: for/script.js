// "use strict"
// let array =[]
// let enterNumber =prompt("Please enter a number");
//     while (isFinite(enterNumber)&& enterNumber!==""){
//         array.push(Number(enterNumber))
//         enterNumber = prompt("Please enter a number"); 
//     }for(let i = 0; i < array.length; i++){
//         document.write(`<p> You have entered  ${array.length} numbers</p>`)
//         document.write(`<p>Ju vidurkis yra ${array} </p>`)
// }


const name =("tom");
const lastName =("pom")
let writeHello = prompt("Write `Hello` ");
    if (writeHello.toLowerCase()==="hello" ){ 
        hello(name, lastName);
}
function hello(name, lastName){
    document.write("my name is " + name + "my lastname is " + lastName + "<br>");
}hello(name, lastName)


// function first(){
//     document.write("Some text");
// }
// function second(){
//     document.write("Some text");
// }
// function start(){
//     first()
//     second()
// }
// start()

