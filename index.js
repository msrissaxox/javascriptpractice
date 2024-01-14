//initialized the first count to 0 and created an increment 
//and save button with the corresponding functions.

let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}

//Left and Right counters

let counter = 0
let countDown = document.getElementById("increment-count")
let countUp = document.getElementById("increment-count")

function countdown() {
    
    counter -= 1
    countDown.innerText = counter
}

function countup() {
    counter += 1
    countDown.innerText = counter
}

let name = "Marissa"
let welcomeMessage = "Welcome to our counter"
let message = document.getElementById("welcome-message")

message.innerText = welcomeMessage + ", " + name
message.innerText += "👋"