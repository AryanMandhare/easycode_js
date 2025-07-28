

let result = document.querySelector(".mouse-container");

result.addEventListener("mouseenter", () => {
    result.style.backgroundColor = "red";
})

result.addEventListener("mouseleave", () => {
    result.style.backgroundColor = "white";
})

// result.addEventListener("mousemove", () => {
//     result.style.backgroundColor = "green";


// })

//mouse follower event

// let shadow = document.getElementById("moving-shadow");

// document.addEventListener("mousemove", (e) => {
//     shadow.style.left = `${e.offsetX}px`;
//     shadow.style.top = `${e.offsetY}px`;
// })

const print = {
    karo: (text = "console create by aryan", color = "skyblue") => {
        console.log(`%c ${text}`, `color:${color};font-size:20px`)
    }
}

print.karo("hello", "red");