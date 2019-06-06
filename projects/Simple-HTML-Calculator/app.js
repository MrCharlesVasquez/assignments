//grab form element from the from the DOM by it's name attribute

var addForm= document.addform

addForm.addEventListener( "submit", function(event){
    event.preventDefault()
    var addInput = addForm.addInput.value
    addFrom.addInput.value = ""
}

//1. create Element
//    var nameContainer = document.createElement("p")
//2. Edit Element
//   nameContainer.textContent = firstName + " " + lastName
//3. Display (append it to the DOM)
//   var list = document.getElementById ("list")
//   list.innerHTML= " "

//   list.appendChild(nameContainer)