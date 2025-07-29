let inputtext = document.getElementById("Notification-input")
let btn = document.getElementById("btn")
let notification = document.querySelector(".notification-body")


const notify = (Notification_text = "dummay text", notification_time = 1000) => {
    notification.style.top = "4%"
    notification.innerText = Notification_text
    setTimeout(() => {
        notification.style.top = "-40%"
    }, notification_time)
}



btn.addEventListener("click", () => {
    let text = inputtext.value

    if (text == "") {
        notify("please add text", 2000)
    }
    else {
        notify(text, 3000)
        inputtext.value = ""

    }


})


