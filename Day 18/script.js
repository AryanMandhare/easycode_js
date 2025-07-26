
let result = document.getElementById("container");

result.addEventListener("click", () => {

    result.style.backgroundColor = "red";
})

let btn = document.querySelector(".btn");

let darktheme = true;

btn.addEventListener("click", () => {
    if (darktheme) {
        document.body.style.backgroundColor = "white";
        darktheme = false;
    }
    else {
        document.body.style.backgroundColor = "black";
        darktheme = true;
    }

})