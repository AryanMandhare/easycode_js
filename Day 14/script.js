// create a function

function greet() {
    console.log("hello");
}

greet();

function sayHii(a) {
    console.log(`hello, ${a}`)
}

sayHii("aryan");
sayHii("raj");

//Default parameter
function sayGoodNight(name = "please enter your name") {
    console.log(`Good Night, ${name}`);
}

sayGoodNight();
sayGoodNight("aryan");

function addtion(a, b) {
    console.log(a + b)
}

addtion(2, 3);

function add(num1 = 0, num2 = 0, num3 = 0) {
    console.log(num1 + num2 + num3);
}

add(2, 4);

function multiply(num1 = 0, num2 = 0) {
    console.log(num1 * num2);
}

multiply(3, 3);


let num1 = parseInt(prompt("enter first number"));
let num2 = parseInt(prompt("enter second number"));
let operation = prompt("enter operation");

switch (operation) {
    case "+":
        add(num1, num2);
        break;

    case "-":
        sub(num1, num2);
        break;

    case "*":
        mul(num1, num2);
        break;

    case "/":
        div(num1, num2);
        break;

    default:
        console.log("Invalid operation");
}

function add(a, b) {
    console.log(a + b);
}

function sub(a, b) {
    console.log(a - b);
}

function mul(a, b) {
    console.log(a * b);
}

function div(a, b) {
    console.log(a / b);
}