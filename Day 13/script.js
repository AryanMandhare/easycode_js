// create an object and access their key values

let person = {
    name: "aryan",
    age: 23,
    city: "wai",
    eduction: ['10th', '12th', 'bca']
}

// add keys into the object

person.gender = "male";

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person.eduction[0]);

// using object keyword we can display on console keys,values,entries of that object you create

let res = Object.keys(person);
console.log(res);

let res1 = Object.values(person);
console.log(res1);

let res2 = Object.entries(person);
console.log(res2);


let myfav = {
    food: "vada pav",
    place: "goa",
    dish: "paneer",
    subject: "python"
}

console.log(myfav);
let result = Object.keys(myfav);
console.log(result);

let result1 = Object.values(myfav);
console.log(result1);

let result2 = Object.entries(myfav);
console.log(result2);

// once object freeze after we can not change key values

let bankaccount = {
    name: "aryan",
    balance: "100000",
    account_no: "aryan123",
    bank_name: "SBI"
}
Object.freeze(bankaccount);
// This line will have no effect because the object is frozen
bankaccount.balance = "200000";
console.log(bankaccount);

// for of method for array

let fruit = ["apple", "banana", "mango", "orange"];
for (let i of fruit) {
    console.log(i);
}

let value = [1, 23, 3.4, 45];
for (let res of value) {
    console.log(res);
}

// for in method for object
let student = {
    name: "aryan",
    age: 23,
    city: "wai"
}

for (let info in student) {
    console.log(`${info} : ${student[info]}`);
}

let bike = {
    company: "honda",
    model: "shine",
    price: "80000"
}

for (let i in bike) {
    console.log(`${i} : ${bike[i]}`);
}