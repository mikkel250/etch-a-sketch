const sketchpad = document.getElementById("sketchpad");
const resetButton = document.getElementById("reset")
document.getElementById("reset").onclick = resetButtonClick;
var resetPrompt = 32;
sketchpad.style["grid-template-columns"] = `repeat(${resetPrompt}, 1fr)`; // this needs to be added for the initial load or the grid won't display correctly.
// check to see if input is an integer
function isInt4(value) { 
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value));
}

// Hover effect so the grid divs change color when mouse passes over
const hoverEffect = e => {
	document.querySelectorAll(".cell").forEach(element => {  // select each element with class of cell
		element.addEventListener("mouseover", e => {  	// listen for mouseover, and on the event, change background color to black
			e.target.style.background = "black";
		});
	});
};

// Button at top of page will clear current grid and prompt for new grid size
function resetButtonClick() {
	var resetPrompt = prompt("Reset sketchpad and start over? \n Enter the number of squares to create in the sketchpad area. \n Numbers up to 100 are accepted.", 64);
	var resetPromptToNumber = parseInt(resetPrompt);
	if (isInt4(resetPromptToNumber) == true && resetPromptToNumber < 101) {    // if the answer to the prompt is an integer		
		sketchpad.innerHTML = ""; // erases/resets the contents of the sketchpad to blank
		sketchpad.style["grid-template-columns"] = `repeat(${resetPromptToNumber}, 1fr)`; // sets the style to columns, assigns each to 1 fraction of the area.
		createGrid(resetPromptToNumber); // create a grid of squares with the user input from prompt
		hoverEffect();
	} else if (resetPrompt == null) {
		return;
	}	else {
		alert("Invalid response. Please enter only whole numbers up to 100.");
	}
}


// Create the grid, passing in the user input from the prompt. May need to use a loop with the
// number of times to run it passed in as the argument
function createGrid(resetPrompt) {
	for (let i = 0; i < Math.pow(resetPrompt, 2); i++) { 		// Run a loop x # of times. x = raise user input to power of two to get total number of cells
		//debugger;
		const square = document.createElement("div");
		square.classList.add("cell");   // add a class of cell so they can be selected by the hover effect
		sketchpad.appendChild(square);
		console.log("1 square added.");
	}
	
}

createGrid(resetPrompt);
hoverEffect();


// will have to select the child element of sketchpad div

// Optional: have each pass of the mouse over the grid greate a random RGB value.
// Optional 2: have each pass add 10% more black, so after 10 passes the square is completely black