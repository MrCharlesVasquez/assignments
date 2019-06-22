//write a function called antiCaps, which accepts a strings and manipulate  it as follows.

    //uppercase characters will become lowercase.
    //lowercase characters will become uppercase.

//need to use a higher order method( use a "for loop", with an "if statement" inside.). Must loop over the string.
//create a new string,

    function antiCaps(str){
        let result = ""

        for(let i = 0; i < str.length; i++){
            //check each characters to see if it is uppercase of lowercase
            if(str[i] === str[i].toUpperCase()){
                result += str[i].toLowerCase()
            } else {
                result += str[i].toUpperCase()
            }
        }
    return result
    }

    console.log(antiCaps("Hello"))// as ( hELLO ) << this is a primitive data type. Can't substitute or change.
    console.log(antiCaps("racEcar")) // as ( RACeCAR )
    console.log(antiCaps("bAnAnA")) // as ( BaNaNa )


    // classes are constructor functions = main purpose of Constructor Functions, gives properties. 
    //mimic object oriented languages.
    /* key word for a construct function is Instantiate => making an instance of (something)
    // blueprint that outputs objects with the same properties
    */

    function Car(make, model)
    