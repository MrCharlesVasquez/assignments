var monitor = {
    color: "black",
    isMonitorOn: true,
    brand: "ASUS",
    quanity: 14,

    write:(){
        console.log( monitor + "i'm a " + this.color + this.brand + "monitor" + " that is turned on");
    }

 

var coffeecup = {
    color: "white",
    contents: "coffee",
    isCoffeeHot:  true,
    howManyCups: 1,
    write: function(){
        console.log( coffeecup )
    }
}

var waterbottle ={
    color: "white",
    contents: "water",
    isWaterInBottle: true,
    howManyBottles: 1,

}
var bricks = {
    color: ["red", "brown", "orange",],
    howManyBricks: 0 < 300,
    usedInBuilding: True,
    write: function(){
    console.log()
    }
}

