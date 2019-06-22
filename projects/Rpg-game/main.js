const readline = require("readline-sync")

const player ={
    name: "" ,
    health: 100,
    item: "nothing",
    attack: function(){
        return Math.floor(Math.random() * 15)
         }
    }
    


let gameOver = false
const userOptions = ["walk", "scan"]



///// Game Functions ///
function walk(){
    console.log(" You decided to keep walking thru the woods")
    const randomNum = Math.floor(Math.random() * 3 )
    if (randomNum === 0 ){
        const currentEnemy = generateEnemy()
        console.log(` ambushed by ${currentEnemy.name}`)
        numberOfWalks += 1 ;
     
   
        battleLoop(currentEnemy)
        if( currentEnemy.health >= 0 ){
            console.log (`You escaped past ${currentEnemy.name}`)
        }
        if (player.health <= 0 ){
            console.log("YOU DEAD")
            gameOver = true
        }
    } 
}

function Enemy(name, health, attack, Item){
    this.name = name
    this.health = health
    this.Item = Item
    this.attack = attack
          
 }


function useItem(item) {
    if ( item === "jar"){
        player.health += 5
        player.item = "nothing"
        console.log( "you have a jar to put honey in")
    } else if ( item === "empty pot")
        player.health += 5
        player.item = "nothing"
        console.log(" you have an empty pot for honey")
}

function scan(){
    console.log(`your Health: ${player.health}`)
}


function generateEnemy(){
    const randomNum = Math.floor(Math.random() * 3 )
    if ( randomNum === 0){
        return new Enemy("Whoozel", 10, 8, "jar")
    } else if ( randomNum === 1 ){
        return new Enemy( "Bees" , 5, 5, "pot")
    } else if ( randomNum === 2 ){
        return new Enemy("Jagular", 20, 12, " spoon" )
    } else if ( randomNum === 3 ){
        return new Enemy("Heffalump", 30, 20, " milk")
    }
}




function battleLoop(enemy){
    
    console.log(`${enemy.name} Health: ${enemy.health}, Attack Power: ${enemy.attack}-- ${player.name}, Player Health: ${player.health}`)
    
    while( enemy.health > 0 && player.health > 0 ){
        const userAction = readline.keyInSelect(["fight", "run"], "What would you like to do?: ")
        if( userAction === 0 ){
            const power = player.attack()
            enemy.health -= power
            console.log(`${enemy.name} attacked ${player.name} for ${enemy.attack}`)
            player.health -= enemy.attack
            console.log(`${player.name} attacked ${enemy.name} for ${power}!!!`)

        }else if( userAction === 1 ){
            console.log ( "you flee to avoid the fight" )
            let flee = Math.floor(Math.random() * 2 )
        
            if (flee == 0){
                    console.log ( "you are unable to flee")
                    player.health -= enemy.attack
                    console.log ( `you were attacked by ${enemy.name} for ${enemy.attack}`)

            }else if(flee == 1 ){
                break
            }    
        } 
    }

}           
        
let numberOfWalks = 0 ;






//////Game play/////
console.log("Why hello there! Whom has wondered into the 100 acre woods?")
player.name = readline.question ("May I ask what is your name?: ")
console.log(`Why thank you ${player.name} I am much obliged to meet you. Follow the path thru the woods to reach the Honey Pot at the end of the path.
Be aware of the Whoozels, Jagulars and other villians that may want to stop you along your way.`)

while (!gameOver && numberOfWalks <= 15 ){
    const userAnswer = readline.keyInSelect(userOptions, "what you you like to do?")
    if(userAnswer === 0 ){
        walk()

    } 
    if (numberOfWalks === 15 ){
        console.log (" You reached the end of the 100 acre woods and found the Honey Pot!")
        gameOver = true
    }
    
}



