//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked")
}
function countdown() {
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
}

countdown()
countdown()

//Create a function that logs out the sum of all the lap times

//let lap1 = 34
//let lap2 = 33
//let lap3 = 36

//function sum(){
//    console.log(lap1 + lap2 + lap3)
//}
//sum();

//I can do this another way as well

let lap1 = 34
let lap2 = 33
let lap3 = 36

function sum() {
    let totalLapTime = lap1 + lap2 + lap3
    console.log(totalLapTime)
}

sum()
//write a function that increments. We want to 
//write a function that logs the amount of
//laps the player runs.
//Step 1: Create a function that increments the lapsCompleted
//variable with 1.
//Run it three times

let lapsCompleted = 0

function totalLapTime(){
    lapsCompleted = lapsCompleted + 1
}
totalLapTime()
totalLapTime()
totalLapTime()

console.log(lapsCompleted)