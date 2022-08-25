//alert("hello bruddah");

/* -create function that adds one to the number
-create function that minuses one from the number
-create a function that resets the number to zero */

//button variables
const minusButton = document.getElementById("minus-one");
const resetButton = document.getElementById("reset");
const addButton = document.getElementById("add-one");

//number variables
let number = 0;
document.getElementById("number").innerHTML = number;

console.log(number);

minusButton.addEventListener("click", minusOne);

addButton.addEventListener("click", addOne);

resetButton.addEventListener("click", resetNumber);

function addOne() {
	//when button is pressed, add 1 to the number.
	number = number + 1;
	document.getElementById("number").innerHTML = number;
}

function minusOne() {
	//when button is pressed, minus 1 from the number.
	number = number - 1;
	document.getElementById("number").innerHTML = number;
}

function resetNumber() {
	//reset number back to zero when pressed.
	document.getElementById('number').innerHTML = 0;
}

//ready up on how to use clearInterval() and setInterval()
