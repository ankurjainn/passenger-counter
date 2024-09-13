// document.getElementById("count-el").innerText = 5


// Initialize the count as 0
// listen for clicks
// increment the count variable when button is clicked
// change the count - el in the html to reflect new count



let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    document.getElementById("count-el").textContent = count
}

function save() {
    let countStr = " " + count + " - "
    saveEl.textContent += countStr
    count = 0
    document.getElementById("count-el").textContent = count
}


