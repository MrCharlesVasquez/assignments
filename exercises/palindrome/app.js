function checkPalindrome(inputString) {
    // split into array without for loop
    const reversed = inputString.split("").reverse().join()

//or 

    return inputString = inputString.split("").reverse().join()

    
/// for loop
const arr = inputString.split("")
    for(let i = 0; i < checkPalindrome.length; i++){
        if(arr[i] === arr[arr.length - ( i + 1 ) ]){
            return false
        }
    } 
        return true
    
}
    // for(let i = 0; i < checkPalindrome.length; i++){
    //     if (checkPalindrome.length.split("") === checkPalindrome.reverse.split(""))
    //     return (true)
   
    


// with a for loop
// without

checkPalindrome("aabbaa") // => true
checkPalindrome("abac") // => false
checkPalindrome("a") // => true
checkPalindrome("az") // => false
checkPalindrome("racecar") // => true