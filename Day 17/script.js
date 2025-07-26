// let container= document.getElementsByTagName("div");
// console.log(container);

// let res = document.getElementsByClassName("container");
// console.log(res);


// get Element by id

let res = document.getElementById("container");
console.log(res);

// get element by queryselector

let res1 = document.querySelector(".heading")
console.log(res1);

// 2.modify the element:

// i] .innerText

let container = document.getElementById("container");

container.innerText = "hello i am div select by id";
console.log(container);

let mainheading = document.querySelector(".heading")

mainheading.innerText = "main heading";
console.log(mainheading);

// ii] .innerHTML

let container1 = document.querySelector(".main-container");
container1.innerHTML = "<h2>I am bca student</h2>";
console.log(container1);

// 3.control styling:

let change = document.getElementById("container");
change.style.backgroundColor = "red";
change.style.fontSize = "40px";
change.style.color = "white";
console.log(change);

document.body.style.backgroundColor = "white";
document.body.style.color = "black";