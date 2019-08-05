// JS Promise (thenable)
//  Why do we need them :
//      For Handling asynchronous code
//      3 states of a Promise:
//           1. < pending>
//           2. resolved (fulfilled) .then( res => console.log(res))
//           3. rejected  .catch (err => console.log(err))

function goGetData (){
    return new Promise((resolve, reject)=> setTimeout(resolve("Hello"), 500))
}

const data = goGetData()

function flipCoin(){
    const num = Math.floor(Math.random() * 2)
    return new Promise((resolve, reject) => {
        if( num === 0 ){
            resolve("HEADS")
        } else if(num === 1){
            reject("TAILS")
        }
    })
}

async function myFunc(){
    const value = await flipCoin()
    return value
}
console.log(myFunc())

const urls = ["website.com 1","website.com 2","website.com 3"]

function getAllDatas(){
    const pendingPromiseArr = []
    for(let i = 0 ; i < urls.length; i++){
        const pendingPromiseArr
    }
}