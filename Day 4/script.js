alert("invalid password");

prompt("enter your name:");

let userInput = prompt("Enter your name:");
console.log(userInput);

let firststring = prompt("Enter first number:");
let firstnumber = parseInt(firststring);
let secondstring = prompt("Enter second number:");
let secondnumber = parseInt(secondstring);
let sum = (firstnumber + secondnumber);
console.log(sum);

           // OR
// let firstnum= prompt("Enter first number:");
// let firstnumber= Number(firstnum);
// let secondnum= prompt("Enter second number:");
// let secondnumber= Number(secondnum);
// let res=(firstnumber + secondnumber);
// console.log(res);


confirm("are you leaving this page?");

let resconfirm = confirm("Are you sure you want to delete this?");
console.log(resconfirm);