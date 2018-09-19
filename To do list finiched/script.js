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
