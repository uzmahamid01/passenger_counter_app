
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)

let count = 0

function increment() {
    count += 1 
    countEl.innerText = count

}
increment()

// 1. Create a function, save(), which logs out the count when it's called
function save() {
    let saveCnt = count + " - "
    saveEl.textContent += saveCnt
    // console.log(count)
    countEl.textContent = 0
    count = 0
}

