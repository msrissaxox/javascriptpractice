//initialize the count as 0
//listen for clicks on the increment button
//increment the count variable when the button is clicked
//change the count-el in the HTML to reflect the new count

function increment() {
    console.log("The button was clicked")
}

function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)    
}
countdown()

let lapsCompleted = 0

// Create a function that increments the lapsCompleted variable with one
// Run it three times

function totalLaps() {
   lapsCompleted = lapsCompleted + 1
}

totalLaps()
totalLaps()
totalLaps()

console.log(lapsCompleted)







let count = 0

function increment(){
count = count + 1    
}
console.log(count)

let countEl = document.getElementById("increment-btn")