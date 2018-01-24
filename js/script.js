var sketchpad = document.getElementById("sketchpad");

var resetBtn = document.getElementById("#reset");
resetBtn.onclick = resetButton();

// Button at top of page will clear current grid and prompt for new grid size
function resetButton() {
	let resetPrompt = prompt("Reset sketchpad and start over? \n Enter the number of squares to create in the sketchpad area.").onclick(createGrid(numberOfSquares));
	if (resetPrompt != null) {
		createGrid(numberOfSquares);
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
		document.createElement("div");
		sketchpad.appendChild("div");
	}
	
}

//createGrid(32);

// Hover effect so the grid divs change color when mouse passes over
// will have to select the child element of sketchpad div

// Optional: have each pass of the mouse over the grid greate a random RGB value.
// Optional 2: have each pass add 10% more black, so after 10 passes the square is completely black