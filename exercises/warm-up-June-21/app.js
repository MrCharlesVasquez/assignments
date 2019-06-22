// Write a function that takes a string, and returns the boolean true if the string
// is a palindrome, false otherwise.

function isPalindrome(str){
    const noSpaces = str.replace(/ /g, "").toLowerCase()
    const backwards = noSpaces.split("").reverse().join("")
    
    return noSpaces === backwards

    // another way to write the return
    // return str.replace(/ /g, "").toLowerCase() === backwards = noSpaces.split("").reverse().join("")
}

console.log(isPalindrome("So many dynamos"))  // true
console.log(isPalindrome("I am a dog")) // false


