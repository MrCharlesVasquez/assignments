const readline = require("readline-sync");
const name = readline.question("Who do we have the pleasure of playing the game with? ");
console.log( "Thank you, GET IN " + name + " to GET OUT!!")

let gameOver = (false)
let options = [ "Put your hand in the hole", "Find the Skeleton Key", "Open the Door", "Take a shot"]
let key = (false)

while(!gameOver){
    const userAnswer = readline.keyInSelect(options, "Choose wisely or meet your fate:")

    if(userAnswer === 0){
        console.log("tisk, tisk, you lost your hand it is now chopped off and you bleed to Death. (Game Over)")
        gameOver = true

} else if (userAnswer === 1){
        console.log( "You stumbled upon the skeleton key! Guard this with your life!" )
        key = true
} else if (userAnswer === 2 && key === false){ 
    console.log("The door can not open with out a key")
} else if (userAnswer === 2 && key === true){
    console.log("YOU ESCAPED " + name + "!")
        gameOver = true
} else if (userAnswer === 3){
    console.log("You drank poison!")
        gameOver = true
} else if (userAnswer === -1){
    console.log( "It is to late to cancel, haha!")
}
}
