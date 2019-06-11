const container = getElementsById("container")

function createAllTheDivs(){
    for(let i = 0; i < 9; i++){
        // 1 create element(s)
        const newDiv = document.createElement('div')
        createAllTheDivs()
    }
}


// flex-direction: row // is similiar to display inline - block
@Media only screen and (min-width)