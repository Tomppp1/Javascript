function addButton(){
    let listUl= document.getElementById("list");
    let input=document.getElementById("input").value;
    let newItem=document.createElement("li")
    newItem.innerHTML=input;
    listUl.appendChild(newItem);
    document.getElementById("input").value="";
    if (input===""){    
        alert("Please fill em")
    }
}
