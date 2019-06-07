// var name= "carlos"

//     function toArray(str){
//         var arr = [];
//         for (i = 0; i < str.length; i++){
//             arr[i] = str[i]
//         }
//         return arr ;
//     }
// console.log(toArray(name))

// var line = ["character", "a"]

// function toArray(str){
//     var arr = [];
//     for(i = 0; i < str.length; i++)
//     for (a = line.indexOf("a"){
//         function myFunction( )
//     }
// }


const listContainer = document.getElementById("list-container")

function createAllTheDivs(){

    for(let i = 0 ; i < 20; i++){
        //creat elements(s)
        const newDiv = document.createElement("div")
        const newH1 = document.createElement("h1")

        // e edit elements(s)
        newH1.textContent = "hello world"

        //3 display (append) to dom 
        newDiv.appendChild(newH1)
        listContainer.appendChild(newDiv)
    }
}

creatAllTheDivs()









