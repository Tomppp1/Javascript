let newItemCounter=1;
let ourList=document.getElementById("listItems");
let ourHeadline =document.getElementById("headline")
let listItems=document.getElementById("listItems").getElementsByTagName("li");
let button=document.getElementById("button")
for(i=0; i<listItems.length; i++){
    listItems[i].addEventListener("click", activateItem);
} 
function activateItem(){
    ourHeadline.innerHTML=this.innerHTML;
}
button.addEventListener("click",createNewItem)
function createNewItem(){
    ourList.innerHTML +="<li>Something new "+newItemCounter+" </li>"
    newItemCounter++;
}