const container = getElementsById("container")

function createAllTheDivs(){
    for(let i = 0; i < 9; i++){
        // 1 create element(s)
        const newDiv = document.createElement('div')
        createAllTheDivs()
    }
}
