const readline = require("readline-sync")

const player ={
    name: "" ,
    health: 100,
    attack: function(){
        return Math.floor(Math.random() * 10)
    
        }
    }
    


let gameOver = false
const userOptions = ["walk"]



///// Game Functions ///
function walk(){
    console.log(" You decided to keep walking thru the woods")
    const randomNum = Math.floor(Math.random() * 5 )
    if (randomNum === 0 ){
        const currentEnemy = generateEnemy()
        console.log(` ambushed by ${currentEnemy.name}`)
        //Player gets in fight with random enemy
     
   
        battleLoop(currentEnemy)
    }
}

function Enemy(name, health, hit){
    this.name = name
    this.health = health
    this.hit = hit

    
}


function generateEnemy(){
    const randomNum = Math.floor(Math.random() * 3 )
    if ( randomNum === 0){
        return new Enemy("Whoozel", 15, 10)
    } else if ( randomNum === 1 ){
        return new Enemy( "Bees" , 10, 5)
    } else if ( randomNum === 2 ){
        return new Enemy("Jagular", 30, 15)
    } else if ( randomNum === 3 ){
        return new Enemy("Heffalump", 40, 20)
    }
}
function battleLoop(enemy){
    
    console.log(`${enemy.name} Health: ${enemy.health}, Attack: ${enemy.hit}-- ${player.name}, Player: ${player.health}`)
    
    while( enemy.health > 0 && player.health > 0 ){
        const userAction = readline.keyInSelect(["fight", "run"], "What would you like to do?: ")
        if( userAction === 0 ){
            const attackPower = player.attack()
            enemy.health -= hit
            console.log(`${enemy.type} attacked ${player.name} for ${enemy.attack}`)
            player.health -= enemy.attack
            console.log(`${player.name} attacked ${enemy.type} for ${player.attack}!!!`)
        } else( userAction === 1 )
            console.log(player)
            return
        }
            
        }
    
    





//////Game play/////
console.log("Whom has wondered into the 100 acre woods?")
player.name = readline.question (" What is your name?: ")
console.log(`thank you ${player.name}`)

while (!gameOver){
    const userAnswer = readline.keyInSelect(userOptions, "what you you like to do?")
    if(userAnswer === 0 ){
        walk()
    } 
}



