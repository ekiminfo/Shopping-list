var userInput = document.getElementById("input")
var btn = document.getElementById("enter")
var ul = document.querySelector("ul")
var delBtns = document.getElementsByClassName("del")
var myList = ul.getElementsByTagName("li")


for(var i = 0; i < delBtns.length; i++) {
    delBtns[i].addEventListener("click", deleParent)
}

function deleParent(e){
    e.target.parentNode.remove()
}

function addlist(){
    var li = document.createElement("li")
    let btn = document.createElement("button")
    btn.innerHTML = "Delete"
    btn.className = "del"
    li.appendChild(document.createTextNode(userInput.value))
    li.appendChild(btn)
    ul.appendChild(li)
    userInput.value = ''
    btn.addEventListener("click", deleParent)
}

function btnclick(){
    if(userInput.value.length > 0){
        addlist()
    }
}

function keyenter(e){
    if(userInput.value.length > 0 && e.keyCode === 13){
        addlist()
    }
}


btn.addEventListener("click", btnclick);

userInput.addEventListener("keypress", keyenter)



