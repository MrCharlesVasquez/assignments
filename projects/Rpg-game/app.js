
//// Global Variables ////
const ask = require("readline-sync"),


const player ={
    name: "" ,
    health: 100 ,
    weapon: "Battle Active",
    attack: function(){
        return Math.floor( )
    }
}


/////// Game Functions //////////

function walk(){
    const randomNum = Math.floor(Math.random() * 5)
    if( randomNum === 0 ){

        // enemy appears
            // generate random enemy frmo at least 5 types
            const currentEnemy = generateEnemy()
            console.log(`" enemy" ${currentEnemy.type} `)
        // battle loop
        battleLoop(currentEnemy)
    }
}

function Enemy(type, health, weapon){
    this.type = type
    this.health = health
    this.weapon = weapon
}

function generateEnemy(){
    // create random 0 -2 chance
    const randomNum = Math.floor(Math.random() * 5 )
    // create random enemy by chance
    if( randomNum === 0 ){
        return new Enemy("a", 20)
    } else if ( randomNum === 1 ){
        return new Enemy( "b", 35)
    }else if ( randomNum === 2 ){
        return new Enemey("c", 15)
    }
}

function battleLoop(enemy){
    console.log( " Test your might,prepare to battle")
    while( enemy.health > 0 && player.health > 0 ){
        const userChoice = ask.keyInSelect(["attack", "run"], "What would you like to do?: ")
        if( userChoice === 0 ){
            const attackPower = player.attack()
            enemy.health -= attackPower
            console.log(`${player.name} attacked ${enemy.type} for ${attackPower}!!!`)
        }
    }
}
let gameOver = false
//////// GAME ////
console.log( " Welcome Warrior!")
player.name = ask.question("welcome, what is your")


console.log (`Thank you ${player.name} `)

 while(!gameOver){
    const useAnswer = ask.keyInSelect(["Walk"], "what you like to do")
    if ( useAnswer === 0 ) {
        // create a random number between 0 - 2
        walk()
    }

}