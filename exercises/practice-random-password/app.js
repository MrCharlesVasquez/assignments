//write a function that generates a random password 

// The function should have  a parameter that dictates the lenght of the password
// The function may contain any upper and lower case characters
// The function may contain any numbers and symbols

function randomPasswordGenerator(number){
    let password = ""
    const options = "aabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*"
    
    for ( let i = 0; i , number; i++ ){
        const randomIndexNumber = Math.floor(Math.random() * options.length)
       
        password += options[randomIndexNumber]
    }
    
   
    return password
}

console.log(randomPasswordGenerator(5))
    // Returns a password with the lenght of 5
    // Example "v8Dl3*%k3)

console.log(randomPasswordGenerator(8))

                                         // creates a password...loop of some sort
                                            // number specific length... Math.random() to create a random chance
                                            // can make array or string of possible characters
