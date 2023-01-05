// document.getElementById("count").innerText = 5;

// target count-el ID
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
//console.log(countEl);

// Initlaise count as 0
let count = 0;
console.log(count);

// listen for clicks on increment button - in HTML at the moment
// increment the count variable when button is clicked
function increment() {
    //console.log("clicked");
    // count = count + 1;
    count += 1; // same as above. takes value of count and adds 1
    // change the count-el in html to reflect new count
    countEl.textContent = count;
    // console.log(count);
}

function save() {
    let entires = count + " - ";
    //saveEl.innerText += entires;
    saveEl.textContent += entires; // as above, however, recognises the spaces around the dash
    // console.log(count);
    // return the counter to 0 when hit save;
    count = 0;
    countEl.textContent = count;
    
}

