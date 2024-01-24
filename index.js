//initialized the first count to 0 and created an increment 
//and save button with the corresponding functions.

let count = 0
let countEl = document.getElementById("count-el")
let savedIncrements = document.getElementById("saved-increments")

function increment() {
    count = count + 1
    countEl.textContent = count
}

function saves() {
    console.log(count)
    savedIncrements.textContent += count + " - "
    count = 0
    countEl.textContent = 0
}




//Left and Right counters

let counter = 0
let countDown = document.getElementById("increment-count");
let countUp = document.getElementById("increment-count");
let savedValue = document.getElementById("saved-value");


function countdown() {
    
    counter -= 1
    countDown.textContent = counter;
}

function countup() {
    counter += 1
    countDown.textContent = counter;
}

function save() {
    savedValue.textContent += counter + "  ";
    countDown.textContent = 0
    countUp.textContent = 0
    counter = 0;
}

let yourName = prompt ("WELCOME! What is your name?");
let welcomeMessage = "Welcome to our counter, "
let message = document.getElementById("welcome-message")

message.textContent = welcomeMessage + ", " + yourName
message.textContent += "👋"

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   // true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false


//New assignment

let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard + 4
let hasBlackJack = false
let isAlive = true
// 1. Declare a variable called message and assign its value to an empty string

// 2. Reassign the message variable to the string we're logging out
if (sum <= 20) {
    console.log("Do you want to draw a new card? 🙂")
} else if (sum === 21) {
    console.log("Wohoo! You've got Blackjack! 🥳")
    hasBlackJack = true
} else {
    console.log("You're out of the game! 😭")
    isAlive = false
}

// 3. Log it out!
