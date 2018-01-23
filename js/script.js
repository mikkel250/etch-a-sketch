// Button at top of page will clear current grid and prompt for new grid size
function resetButton() {
	var resetButton = document.getElementById("#reset");
	resetButton.onclick = function() {
		prompt("Reset sketchpad and start over? \n Enter the number of squares to create in the sketchpad area.").onclick(createGrid(numberOfSquares));

	}
}

// function to reset grid and draw new one
function resetRedraw() {
	
	}	

// Get the user input on how many squares to draw


// Create the grid, passing in the user input from the prompt
function createGrid(numberOfSquares) {
	document.createElement(div) * numberOfSquares;
	sketchpad.appendChild(div) * numberOfSquares;
}

// Hover effect so the grid divs change color when mouse passes over

// Optional: have each pass of the mouse over the grid greate a random RGB value.
// Optional 2: have each pass add 10% more black, so after 10 passes the square is completely black