// 1] Create a vaild json
// It's like a object but little difference between json
// Keys and strings must be in double quotes " "

let person = {
      "name": "aryan",
      "age": 20
}
console.log(typeof (person))
console.log(person)

// i] json.stringify() used convert object data to string data
let str = JSON.stringify(person)
console.log(typeof (str))
console.log(str)

// ii] json.parse() used convert string data to once again object data
let obj = JSON.parse(str)
console.log(typeof (obj))
console.log(obj)

localStorage.setItem("person", str)