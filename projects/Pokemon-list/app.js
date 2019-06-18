

const xhr= new XMLHttpRequest()

xhr.open("GET", "https://api.vschool.io/pokemon")
xhr.send()

    xhr.onreadystatechange = function(){
        if ( xhr.readyState === 4 && xhr.status === 200 ){
            const newData = JSON.parse(xhr.responseText)
            const pokemon = newData.objects[0].pokemon
            acceptData(pokemon)
            
        }
    }

    function acceptData(newData){
        //console.log(newData)
        for (let i = 10 ; i < 40 ; i++){
            const pokemonName = newData[i].name
            const newName = document.createElement("h1")
            newName.textContent = pokemonName
            document.body.appendChild(newName)

        }
    }


