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
	//reset number back to zero when button is pressed.
	number = 0;
	document.getElementById("number").innerHTML = number;
}
