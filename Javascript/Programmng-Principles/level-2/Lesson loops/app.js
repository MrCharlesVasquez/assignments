/*
*loop types: for and while
*For loop - performs a set number of operations 
     (Anatomy of a For loop )
     three parts -- variable declarations ; conditional statement );last-second operations;
        // 1. Variable declarations
        // 2. Should i run this loop one more time
        // 3. Final code run

     *While loop - operates until a conditio is false

*/
// console.log 5 to 15 

//for (var i = 5; i <= 15; i++ ) {
 //  console.log(i)
//}

/*
for (var i = 5; i >= 5; i-- ) {
    console.log(i)

    counts down from 15 to 5 

for(var i = 0; i <= 10; i += 2){
    console.log(i)
}    this will start at 0 add 2 till 10 ( 2, 4, 6, 8, 10)
 the reason we use "i"  is because it associates with INDEX, otherwords i = index
*/

// Arrays

//var myArray = [ "hello", "my", "name", "is", "Bob"]
// index numbers: 0       1      2       3     4
// console.log(myArray[2]) it will log "name"

/*for (var i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

*/

// myArray.length evaulates to 5 , for the 5 elements in the array

var words = [ "hi", "hello", "bye", "hi", "hi", "goodbye"]
for (var i = 0 ; i < words.length; i++){
    var currentWord = words[i]
    var phrase = phrase + currentWord + " "
}
console.log(phrase)