
var myHeader = document.getElementById("heads")


function generateH1ForRick(){
var myH1 = document.createElement("h1")

myH1.textContent = "I made this"
myH1.style.backgroundColor = "dodgerblue"

var listDiv = document.getElementById("name")
listDiv.appendChild(myH1)
}
