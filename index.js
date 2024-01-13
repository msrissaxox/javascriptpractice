// document.getElementById("count").innerText = 5

//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

function save() {
    console.log(count)
}
save()



let counter = 0
let countDown = document.getElementById("increment-count")
let countUp = document.getElementById("increment-count")

function countdown() {
    counter = counter - 1
    countDown.innerText = counter
}
countdown()

function countup() {
    counter = counter + 1
    countDown.innerText = counter
}
let name = "Marissa"
console.log(name)

let greeting = "Hi, my name is "
console.log(greeting)

let myGreeting = greeting + name
console.log(myGreeting)







