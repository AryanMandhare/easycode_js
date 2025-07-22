
// document in javascript
console.log(document.title="document in javascript");

let mul_num= parseInt(prompt("Enter a number to multiply:"));
document.write("<h1>table of " + mul_num + "</h1>");
for(let i=1; i<=10; i++){
    let result=mul_num*i;
    document.write("<h3>"+result+"</h3>");
}

let userName="easycode";
let websiteURL="https://easycode.support";

console.log("hello "+ userName+" ,welcome to our website "+websiteURL);

console.log(`hello ${userName} ,welcome to our website ${websiteURL}`)


for(let i=0; i>=-20; i--){
    console.log(`i is: ${i}`);
}