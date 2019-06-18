
/// regular format ///
/*function putNamesInTags(arr){
    const result = []

    for ( let i = 0 ; i < arr.length; i++){
        result.push(`<h1>${arr[i].name}<h1>`)
    }
    return result
}*/


/// higher order method ///
function putNamesInTags(arr){
    const result = arr.map(function(person){
        return `<h1>${person.name}<h1>`
    })
    return result
}



const putNamesInTagsES6 = arr =>{
    const result = arr.map(person => `<h1>${person.name}<h1>`)
    return result
}
/// ES6 convention//
const putNamesInTagsES6 = arr => arr.map(person => `<h1>${person.name}<h1>`)