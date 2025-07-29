
// setTimeout

let result = setTimeout(() => {
    console.log("i am time out")
}, 2000);

console.log(result)

//  clearTimeout()  
// using this we can clear console output

let result1 = setTimeout(() => {
    console.log("i am aryan")
}, 3000);

console.log(result1)

clearTimeout(result1)

// setInterval

let res = setInterval(() => {
    console.log("i am set interval")
}, 2000);

console.log(res)

clearInterval(res)

