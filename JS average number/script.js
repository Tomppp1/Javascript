"use strict"
let array =[]
let sum=0;
let enterNumber =prompt("Please enter a number");
    while (isFinite(enterNumber)&& enterNumber!==""){
        array.push(Number(enterNumber))
        enterNumber = prompt("Please enter a number"); 
    }for(let i = 0; i < array.length; i++){
        sum +=( array[i]);   
}
let avg = sum/array.length;
document.write(`<p> You have entered  ${array.length} numbers,  the sum is ${sum} the average number is ${avg}</p>`);

