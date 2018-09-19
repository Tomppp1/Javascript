function addButton(){
    let listUl= document.getElementById("list");
    let input=document.getElementById("input").value;
    let newItem=document.createElement("li")
    if (input===""){    
        alert("Please fill em")
    }else{ 
        newItem.innerHTML=input;
        listUl.appendChild(newItem);
        document.getElementById("input").value="";
    }
}
function addButtonSecond(){
    let listUl= document.getElementById("listSecond");
    let input=document.getElementById("inputSecond").value;
    let newItem=document.createElement("li")
    if (input===""){    
        alert("Please fill em")
    }else{ 
        newItem.innerHTML=input;
        listUl.appendChild(newItem);
        document.getElementById("inputSecond").value="";
    }
}
// document.getElementsByTagName("LI").addEventListener("click", displayDate);
// function displayDate(){
// alert("Sfs")
// }

function changeName(){
    let listName=document.getElementById("name");
    let enterNewName=prompt("Enter new list name");
    if (enterNewName===""){
        alert("List name was not changed")
    }else{
        listName.innerHTML=enterNewName;
    }
}
function changeName1(){
    let listName=document.getElementById("listName1");
    let enterNewName=prompt("Enter new list name");
    if (enterNewName===""){
        alert("List name was not changed")
    }else{
        listName1.innerHTML=enterNewName;
    }
}
