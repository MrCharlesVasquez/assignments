
//// show clicks to user and store in local storage ///


const btn = document.getElementById("btn").addEventListener("click" , counter)
let clicks =localStorage.getItem("input")
const result = document.createElement("h1")

function counter(){
    if( clicks === null){
        clicks = 0; 
    }
    clicks ++
    result.textContent = clicks
    document.body.appendChild(result)
    localStorage.setItem("input", clicks)

}


