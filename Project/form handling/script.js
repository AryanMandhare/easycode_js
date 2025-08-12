
let username = document.getElementById("user-name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let button = document.getElementById("btn");
let form = document.getElementById("form");
let errorcontainer = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let usernameValue = username.value;
    let emailValue = email.value;
    let passwordValue = password.value;

    if (usernameValue.length <= 4) {
        errorcontainer.style.display = "block";
        errorcontainer.innerText = "Username must be more than 4 characters";
        errorcontainer.style.color = "red";
    } else if (!emailValue.includes("@") || !emailValue.includes(".")) {
        errorcontainer.style.display = "block";
        errorcontainer.innerText = "Enter a valid email";
        errorcontainer.style.color = "red";
    } else if (passwordValue.length < 6) {
        errorcontainer.style.display = "block";
        errorcontainer.innerText = "Password must be greater than 6 characters";
        errorcontainer.style.color = "red";
    } else {
        errorcontainer.style.display = "none";
    }
});












