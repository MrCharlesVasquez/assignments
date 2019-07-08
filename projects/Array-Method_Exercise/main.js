 var fruit = ["banana", "apple", "orange", "watermelon"];
 var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables)

fruit.shift()
console.log(fruit)

var orange = fruit.indexOf("orange")
console.log(fruit.indexOf("orange")) // the index of orange is 1, since the shift() was used to remove "banana" from the beginning of the list.


console.log(fruit.push("1")) // concat "1"  added the number 1 to the end of fruit array

console.log(vegetables.length) // length of vegetables array is 3

 console.log(vegetables.push("3")) // concat "3" added the number 3 to the end of the vegetable array

 
 console.log(fruit.concat(vegetables)) // concat combines the fruit array with the vegetables array and places the fruit array in front.


var food = fruit.concat(vegetables); // Put the two arrays together into one array. Fruit first. Call the new Array "food".

 
console.log(food) 

var newFood = food.splice(4,2) // Remove 2 elements from your new array starting at index 4 with one method. 
console.log(food)                   // the splice method must save the elements in a new function to be able to display adjusted array.

console.log(food.reverse()) //Reverse your array.

var food= food.join(",") //Turn the array into a string and return it.
console.log(food)


// If you've done everything correctly, the last step should print the following string to the console:

// 3,pepper,1,watermelon,orange,apple

