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

// 2] local storage
// local storsge provide by the braower
// Average capacity to Stores data only 5MB 
// local storage store only primitive data types number, string,boolean

// i] .setItem() - it used to add item into the local storage

localStorage.setItem("user_name", "aryan")
localStorage.setItem("is_login", true)
localStorage.setItem("last_login", new Date())
let person1 = {
      name: "aryan",
      age: 20
}

localStorage.setItem("user_info", JSON.stringify(person1))


// ii] .getItem() - it used get/ read item to local storage

let res1 = localStorage.getItem("user_name")
console.log(res1)

let res2 = localStorage.getItem("is_login")
console.log(res2)

let res3 = localStorage.getItem("last_login")
console.log(res3)

let res4 = JSON.parse(localStorage.getItem("user_info")) //  it convert string to object
console.log(res4)

// iii] .remoeItem() - it used to remove item to local storage

localStorage.removeItem("user_name")
localStorage.removeItem("is_login")

// iv] .clear() - clear all data from local storage

let res5 = localStorage.clear()
console.log(res5)