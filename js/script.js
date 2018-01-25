var sketchpad = document.getElementById("sketchpad");

document.getElementById("reset").onclick = resetButton;
// resetBtn.onclick = resetButton;

// check to see if input is an integer
function isInt4(value) { 
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

// Button at top of page will clear current grid and prompt for new grid size
function resetButton() {
	var resetPrompt = prompt("Reset sketchpad and start over? \n Enter the number of squares to create in the sketchpad area.");
	var resetPromptToNumber = parseInt(resetPrompt);
	if (isInt4(resetPromptToNumber) == true) {    // if the answer to the prompt is an integer		
		createGrid(resetPromptToNumber);
	} else {
		alert("Invalid response. Please enter only whole numbers.");
	}
}



// function to reset grid and draw new one
function resetRedraw() {
	// code code
	}

// Get the user input on how many squares to draw


// Create the grid, passing in the user input from the prompt. May need to use a loop with the
// number of times to run it passed in as the argument
function createGrid(numberOfSquares) {
	for (let i = 0; i < numberOfSquares.length; i++) {
		//debugger;
		let square = document.createElement("div");
		sketchpad.appendChild(square);
		console.log("1 square added.")
	}
	
}

createGrid(16);

// Hover effect so the grid divs change color when mouse passes over
// will have to select the child element of sketchpad div

// Optional: have each pass of the mouse over the grid greate a random RGB value.
// Optional 2: have each pass add 10% more black, so after 10 passes the square is completely black