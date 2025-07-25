// types of function

// 1] anonymous function  a funtion without name

let person = function (name) {
    return (`hello ${name}`);
}

let res1 = person("aryan");
console.log(res1);


let addtion = function (a, b) {
    return a + b;
}

let res = addtion(10, 20);
console.log(res);


let checknum = function (number) {
    if (number % 2 == 0) {
        return ("even");
    }
    else {
        return ("odd");

    }

    //ternary operator
    // number % 2 == 0 ? console.log("even") : console.log("odd");
}

let res2 = checknum(10);
console.log(res2);
let res3 = checknum(11);
console.log(res3);

// 2] Arrow function

let add = (a, b) => {
    return (a + b);
}

console.log(add(20, 20));

let mul = (a, b) => {
    return (a * b);
}

console.log(mul(20, 20));

let sub = (a, b) => a - b;

console.log(sub(20, 30));

// using Arrow function reverse array

let arr = [10, 20, 30, 40, 50];

let reverse = (arr) => {
    return arr.reverse();
}

let res4 = reverse(arr);
console.log(res4);

//using arrow function sort array

let a = [23, 40, 50, 32, 74]
let array = (a) => {
    return a.sort();

}
let result = array(a);
console.log(result);

// 3] Higher order function    

// A higher order function is a function that receives 
// another function as a parameter


// i]
let callback = () => {
    console.log("I am callback function");
}

let highorder = (func) => {
    console.log("I am higher order function");
    func();
}

highorder(callback);

// ii]
let sum = (a, b) => {
    console.log(a + b);
}

let result1 = (process) => {
    console.log("loading answer...")
    process(2, 3);
}

result1(sum);

// iii]

let post = () => {
    console.log("Download successfuly");
}

let get = (post) => {
    console.log("Downloading...");
    post();
}

get(post);